import * as React from 'react';
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation';
import { Header4, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { GreenButton, WhiteButton } from '../components/Buttons/buttons.styled';
import Geocode from 'react-geocode';
import { Container, LocationInfo, BottomButtons } from '../styles/EditLocation.styled';
import { ImagePlaceholder } from '../images/ImageExporter';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../api/axios';
import { generateUploadURL } from '../api/s3';

const EditLocation: React.FC = () => {
	const navigate = useNavigate();
	Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
	Geocode.setLanguage('en');
	const [locationData, setLocationData] = React.useState(null);
	const [location, setLocation] = React.useState(null);
	const [image, setImage] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);

	const { id } = useParams();
	const inputFile = React.useRef(null);

	const uploadImage = async () => {
		try {
			const s3Options = { headers: { 'Content-Type': 'image/png' } };
			const url = await generateUploadURL();
			await axios.put(url, inputFile.current.files[0], s3Options);
			const imageUrl = url.split('?')[0];
			setImage(imageUrl);
		} catch (error) {}
	};

	const getLocationInfo = async () => {
		try {
			const response = await axios.get(`/location/${id}`);
			if (response.status === 200) {
				const { data } = response;
				setLocationData(data);
				Geocode.fromLatLng(data.latitude, data.longitude).then(
					(response) => setLocation(response.results[0].formatted_address),
					(error) => console.error(error)
				);
				setIsLoaded(true);
			}
		} catch (error) {}
	};
	getLocationInfo();

	if (isLoaded) {
		return (
			<>
				<Navigation />

				<Container>
					<Header4>
						Edit <GreenText>location</GreenText>.
					</Header4>

					<input type='file' id='avatar' ref={inputFile} style={{ display: 'none' }} onChange={() => uploadImage()} />
					<img src={locationData.image ? locationData.image ?? image : ImagePlaceholder} alt={'location.png'} height={'300px'} width={'860px'} />

					<LocationInfo>
						<Paragraph>
							Location: <u>{location}</u>
						</Paragraph>
					</LocationInfo>

					<BottomButtons>
						<GreenButton
							onClick={() => {
								inputFile.current.click();
							}}>
							UPLOAD IMAGE
						</GreenButton>
						<br />
						<GreenButton>SAVE</GreenButton>
						<WhiteButton onClick={() => navigate('/profile')}>Cancel</WhiteButton>
					</BottomButtons>
				</Container>

				<Footer />
			</>
		);
	}
};

export default EditLocation;
