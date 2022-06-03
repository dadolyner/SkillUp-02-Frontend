import * as React from 'react';
import { Container, UserContainer, BestGuessesContainer, MyUploadsContainer } from '../styles/Profie.styled'
import { Avatar } from '../images/ImageExporter';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/Footer/footer';
import { Header4, Header5 } from '../components/Typography/typography.styled';
import { GridContainer } from '../components/Locations/location.styled';
import { LoadMore } from '../components/Buttons/buttons.styled';
import Location from '../components/Locations/location'

const Profile: React.FC = () => {
    const [guessesLimit, setGuessesLimit] = React.useState(3);
    const [locationsLimit, setLocationsLimit] = React.useState(9);

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const locations = userInfo.location
    const guesses = userInfo.guess.sort((a: any, b: any) => {return a.distance - b.distance});

    return (
        <>
            <Navigation />

            <Container>
                <UserContainer>
                    <img src={userInfo.avatar ? userInfo.avatar : Avatar} alt="user_avatar" width={'64px'} height={'64px'}/>
                    <Header4 style={{ marginLeft: '20px'}}>{userInfo.first_name} {userInfo.last_name}</Header4>
                </UserContainer>

                <BestGuessesContainer>
                    <Header5>My best guesses</Header5>
                    <GridContainer className='leftAlign'>
                        { guesses.slice(0, guessesLimit).map((guess: any) => { return <Location id={guess.id} className='profileLocation' key={guess.id} image={guess.locationImage} distance={guess.distance} isGuessed={true} /> })}
                    </GridContainer>
                    <LoadMore style={{width: '200px', marginTop:'20px'}} onClick={() => setGuessesLimit(locationsLimit + 3) }>Load More</LoadMore>
                </BestGuessesContainer>

                <MyUploadsContainer>
                    <Header5>My uploads</Header5>
                    <GridContainer className='leftAlign'>
                        { locations.slice(0, locationsLimit).map((location: any) => { return <Location id={location.id} className='profileLocation' key={location.id} image={location.image} isMyLocation={true} /> })}
                    </GridContainer>
                    <LoadMore style={{width: '200px', marginTop:'20px'}} onClick={() => setLocationsLimit(locationsLimit + 9) }>Load More</LoadMore>
                </MyUploadsContainer>
            </Container>

            <Footer />
        </>
    )
}

export default Profile;