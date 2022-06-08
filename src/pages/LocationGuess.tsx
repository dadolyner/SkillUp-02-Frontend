import * as React from 'react';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/Footer/footer';
import { Container, MapsContainer, LocationImage, GoogleMapsContainer, GuessInfo, GridItem, LeaderboardContainer, Input } from '../styles/LocationGuess.styled';
import { Header4, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { GreenButton } from '../components/Buttons/buttons.styled';
import Geocode from 'react-geocode';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { ImagePlaceholder } from '../images/ImageExporter';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import Distance from '../components/distance';
import UpdateUserInfo from '../components/updateUserInfo';
import Leaderboard from '../components/Leaderboard/leaderboard';

const GuessLocation: React.FC = () => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
    Geocode.setLanguage('en');
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY });
    const [isDataLoaded, setIsDataLoaded] = React.useState(false);
    const { id } = useParams();

    const [latitude, setLatitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    const [location, setLocation] = React.useState(null);
    const [locationData, setLocationData] = React.useState(null);
    const [guessesData, setGuessesData] = React.useState(null);
    const [errorDistance, setErrorDistance] = React.useState(null);

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

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

    const getLocationInfo = async () => {
        try {
            const response = await axios.get(`/location/${id}`);
            if (response.status === 200) {
                const { data } = response;
                setLocationData(data);
                await getGuessesForLocation();
                setIsDataLoaded(true);
            }
        } catch (error) {}
    };

    const getGuessesForLocation = async () => {
        try {
            const response = await axios.get(`/location/guesses/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } });
            if (response.status === 200) {
                const { data } = response;
                setGuessesData(data);
            }
        } catch (error) {}
    };

    React.useEffect(() => {
        getLocationInfo();
    }, []);

    const guessLocation = async () => {
        try {
            const response = await axios.post(`/location/guess/${id}`, { latitude, longitude }, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } });
            if (response.status === 201) {
                const { data } = response;
                setErrorDistance(data.distance);
                await UpdateUserInfo();
                await getLocationInfo();
            }
        } catch (error) {}
    };

    if (isLoaded && isDataLoaded) {
        return (
            <>
                <Navigation />

                <Container>
                    <MapsContainer>
                        <Header4 style={{ textAlign: 'left' }}>
                            Take a <GreenText>guess</GreenText>!
                        </Header4>

                        <LocationImage>
                            <img src={locationData.image ? locationData.image : ImagePlaceholder} alt={'location_image.png'} height={'300px'} width={'100%'} />
                        </LocationImage>

                        <GoogleMapsContainer>
                            <GoogleMap
                                center={center}
                                zoom={10}
                                options={{
                                    streetViewControl: false,
                                    mapTypeControl: false,
                                    fullscreenControl: true
                                }}
                                mapContainerStyle={{ height: '300px', width: '100%' }}
                                onClick={(event: any) => handleChangeCoords(event)}>
                                <Marker key={new Date().getTime().toString()} position={{ lat: latitude, lng: longitude }} />
                            </GoogleMap>
                        </GoogleMapsContainer>
                        <br />

                        <GuessInfo>
                            <GridItem>
                                <Paragraph style={{ textAlign: 'left' }}>Error distance</Paragraph>
                                <Input type="text" value={errorDistance ? Distance(errorDistance) : ''} placeholder="0" disabled />
                                <br />
                            </GridItem>
                            <div></div>
                            <GridItem>
                                <Paragraph style={{ textAlign: 'left' }}>Guessed location</Paragraph>
                                <Input type="text" value={location ? location : ''} placeholder="City" disabled />
                                <br />
                            </GridItem>
                        </GuessInfo>
                        <GreenButton style={{ width: '150px', float: 'right' }} onClick={() => guessLocation()}>
                            GUESS
                        </GreenButton>
                    </MapsContainer>

                    <br />

                    <LeaderboardContainer>
                        <Header4 style={{ textAlign: 'left' }}>Leaderboard</Header4>

                        {guessesData.map((guess: any, index: number) => {
                            const isMe = guess.user.id === userInfo.id;
                            return (
                                <Leaderboard
                                    key={guess.id}
                                    user={`${guess.user.first_name} ${guess.user.last_name}`}
                                    image={guess.user.avatar}
                                    userPosition={index + 1}
                                    distance={guess.distance}
                                    timestamp={guess.timestamp}
                                    isMeUser={isMe}
                                />
                            );
                        })}
                    </LeaderboardContainer>
                </Container>

                <Footer />
            </>
        );
    }
};

export default GuessLocation;
