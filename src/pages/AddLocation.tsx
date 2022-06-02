import * as React from 'react';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/Footer/footer';
import { Container, LocationImage, LocationMaps, ButtonsContainer, GuessInfo, Input, DeleteLocation } from '../styles/AddLocation.styled';
import { Header4, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { GreenButton } from '../components/Buttons/buttons.styled';
import Geocode from 'react-geocode';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { ImagePlaceholder } from '../images/ImageExporter';
import { generateUploadURL } from '../api/s3';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import UpdateUserInfo from '../components/updateUserInfo';

const AddLocation: React.FC = () => {
    const navigate = useNavigate();
	Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
	Geocode.setLanguage('en');
	const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY });

    const inputFile = React.useRef(null);
	const [latitude, setLatitude] = React.useState(0);
	const [longitude, setLongitude] = React.useState(0);
	const [location, setLocation] = React.useState(null);
    const [image, setImage] = React.useState(null);

    const uploadImage = async() => {
        try {
            const s3Options = { headers: { 'Content-Type': 'image/png' } };
            const url = await generateUploadURL(); 
            await axios.put(url, inputFile.current.files[0] , s3Options)
            const imageUrl = url.split('?')[0];
            setImage(imageUrl);
        } catch (error) {}
    }

	const center = React.useMemo(() => ({ lat: 46, lng: 14 }), []);
	const handleChangeCoords = async (event: any) => {
		try {
			setLatitude(event.latLng.lat());
			setLongitude(event.latLng.lng());

			Geocode.fromLatLng(event.latLng.lat(), event.latLng.lng()).then(
				(response) => setLocation(response.results[0].formatted_address),
				(error) => console.error(error)
			);
		} catch (error) {}
	};

    const createLocation = async () => {
        const data = {
            latitude,
            longitude,
            image,
        }
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.post('/location', data, { headers: { Authorization: `Bearer ${accessToken}` } });
            if(response.status === 201) {
                navigate('/profile')
                UpdateUserInfo()
                window.location.reload()
            }
        } catch (error) {}
    }

	if (isLoaded) {
		return (
			<>
				<Navigation />

				<Container>
					<Header4>Add a new <GreenText>location</GreenText>.</Header4>

                    <input type='file' id='avatar' ref={inputFile} style={{ display: 'none'}} onChange={() => uploadImage() }/>

					<LocationImage>
						<img src={image ? image : ImagePlaceholder} alt={'location_image.png'} height={'300px'} width={'100%'} />
					</LocationImage>

                    <ButtonsContainer>
                        <GreenButton style={{ width: '200px' }} onClick={() => { inputFile.current.click() }}>UPLOAD IMAGE</GreenButton>
                        <DeleteLocation onClick={() => setImage(null)}></DeleteLocation>
                    </ButtonsContainer>

                    <LocationMaps>
					    <GoogleMap
					    	center={center}
					    	zoom={10}
					    	options={{
                                streetViewControl: false,
					    		mapTypeControl: false,
					    		fullscreenControl: true,
					    	}}
					    	mapContainerStyle={{ height: '300px', width: '100%' }}
					    	onClick={(event: any) => handleChangeCoords(event)}>
					    	<Marker key={new Date().getTime().toString()} position={{ lat: latitude, lng: longitude }} />
					    </GoogleMap>
                    </LocationMaps>

					<GuessInfo>
						<Paragraph style={{ textAlign: 'left' }}>Location</Paragraph>
						<Input type='text' value={location ? location : ''} placeholder='City' disabled />
					</GuessInfo>

                    <ButtonsContainer>
                        <GreenButton style={{ width: '150px' }} onClick={() => createLocation()}>ADD NEW</GreenButton>
                    </ButtonsContainer>     
				</Container>

				<Footer />
			</>
		);
	}
};

export default AddLocation;
