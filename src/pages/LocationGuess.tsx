import * as React from 'react';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/Footer/footer';
import { Container, MapsContainer, LocationImage, GoogleMapsContainer, GuessInfo, LeaderboardContainer, Input } from '../styles/LocationGuess.styled';
import { Header4, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { GreenButton } from '../components/Buttons/buttons.styled';
import Geocode from "react-geocode";
import { GoogleMap, useLoadScript, Marker,  } from '@react-google-maps/api';
import { ImagePlaceholder } from '../images/ImageExporter';

const GuessLocation: React.FC = () => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
    Geocode.setLanguage("en");
	const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY });
    
    const [latitude, setLatitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    const [location, setLocation] = React.useState(null);


    const center = React.useMemo(() => ({ lat: 46, lng: 14 }), []);
    const handleChangeCoords = async (event: any) => {
        try {
            setLatitude(event.latLng.lat());
            setLongitude(event.latLng.lng()); 

            Geocode.fromLatLng(event.latLng.lat(), event.latLng.lng()).then(
                (response) =>  setLocation(response.results[0].formatted_address),
                (error) => console.error(error)
            );
        } catch (error) {}
    }

    const guessLocation = async () => {
        
    }

	if (isLoaded) {
		return (
			<>
				<Navigation />

				<Container>
					<MapsContainer>
						<Header4 style={{ textAlign: 'left' }}>
							Take a <GreenText>guess</GreenText>!
						</Header4>

						<LocationImage><img src={ImagePlaceholder} alt={'location_image.png'} height={'300px'} width={'100%'} /></LocationImage>

						<GoogleMapsContainer>
							<GoogleMap 
                                center={center} 
                                zoom={10} 
                                options={{
                                    streetViewControl: false,
                                    mapTypeControl: false,
                                    fullscreenControl: true,
                                }}
                                mapContainerStyle={{ height: '300px', width: '100%' }} 
                                onClick={(event: any) => handleChangeCoords(event)} >

                                <Marker key={new Date().getTime().toString()} position={{ lat: latitude , lng: longitude }} />
                            </GoogleMap>
						</GoogleMapsContainer><br/>

						<GuessInfo>
							<Paragraph style={{ textAlign: 'left' }}>Error distance</Paragraph><br/>
							<Paragraph style={{ textAlign: 'left' }}>Guessed location</Paragraph>

							<Input type='text' placeholder='0' disabled /><br/>
							<Input type='text' value={location ? location : ''} placeholder='City' disabled/>
						</GuessInfo>
						<GreenButton style={{ width: '150px', float: 'right' }}>GUESS</GreenButton>
					</MapsContainer>

					<br/>

					<LeaderboardContainer>
						<Header4 style={{ textAlign: 'left' }}>Leaderboard</Header4>
					</LeaderboardContainer>
				</Container>

				<Footer />
			</>
		);
	}
};

export default GuessLocation;
