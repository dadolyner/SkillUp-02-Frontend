import * as React from 'react';
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation';
import { Header2, Header5, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { Container, LoggedInContainer, BackgroundContainer, FullWidthContainer, LeftBox, RightBox } from '../styles/Home.styled'
import { GreenButton, LoadMore } from '../components/Buttons/buttons.styled';
import { GridContainer } from '../components/Locations/location.styled';
import { Bled, Logatec, GornjiGrad } from '../images/ImageExporter';
import Location from '../components/Locations/location'
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [locations, setLocations] = React.useState([]);
    const [guesses, setGuesses] = React.useState([]);
    const [guessesLimit, setGuessesLimit] = React.useState(3);
    const [locationsLimit, setLocationsLimit] = React.useState(9);

    const isLoggedIn = localStorage.getItem('userLoggedIn')
    const info = JSON.parse(localStorage.getItem('userInfo'))

    const GetOrRefreshData = async () => {
        try {
            setLocationsLimit(locationsLimit + 9);
            const response = await axios.get(`/location?limit=${locationsLimit}`);
            const { data } = response

            const myGuesses = info.guess.sort((a: any, b: any) => { return a.distance - b.distance })
            const GuessedLocationsId = info.guess.map((guess: any) => guess.locationId)
            const filteredLocations = data.filter((location:any) => !GuessedLocationsId.includes(location.id) && location.userId !== info.id).sort((a: any, b: any) => { return a.timestamp - b.timestamp })
            
            setGuesses(myGuesses)
            setLocations(filteredLocations);
        } catch (error) {}
    }
    React.useEffect(() => { GetOrRefreshData() } , [])


    if( isLoggedIn !== 'true') {
    return (
        <>
            <Navigation />

            <Container> 
                <BackgroundContainer>
                    <LeftBox>
                        <GreenText><Header2 style={{textAlign: 'left', fontWeight:'400'}}>Explore the world with Geotagger!</Header2></GreenText><br/>
                        <Paragraph style={{textAlign: 'left'}}>Geotagger is awebsite that allows you to post picture and tag it on the map. Other user than try to locate it via Google maps</Paragraph>          
                        <GreenButton style={{width: '150px'}} onClick={() => navigate('/register')}>SIGN UP</GreenButton><br/>
                    </LeftBox>
                    <RightBox></RightBox>
                </BackgroundContainer>

                <GreenText style={{marginTop: '150px'}}><Header5>Try yourself at Geotagger!</Header5></GreenText>
                <Paragraph>Try to guess the location of image by selecting position on the map. <br/> When you guess it, it gives you the error distance.</Paragraph>
                
                <GridContainer style={{marginTop: '50px'}}>
                    <div onClick={() => navigate('/register')}><Location id={'1'} key='bled' image={Bled} isLocked={true} /></div>
                    <div onClick={() => navigate('/register')}><Location id={'2'} key='logatec' image={Logatec} isLocked={true} /></div>
                    <div onClick={() => navigate('/register')}><Location id={'3'} key='gornjigrad' image={GornjiGrad} isLocked={true} /></div>
                </GridContainer>

                <GreenButton className='registerButton' onClick={() => navigate('/register')}>SIGN UP</GreenButton>
            </Container>

            <Footer />
        </>
    )
    }
    else {
        return (
            <>
                <Navigation />

                <LoggedInContainer>
                    <div style={{marginTop: '100px'}}>
                        <GreenText style={{marginTop: '150px'}}><Header5 style={{textAlign:'left'}}>Personal best guesses</Header5></GreenText>
                        <Paragraph style={{textAlign:'left'}}>Your personal best guesses appear here. Go on and try to beat your personal records or set a new one!</Paragraph>
                    </div>

                    <GridContainer className='leftAlign'>
                        { guesses.slice(0, guessesLimit).map((guess: any) => { return <Location id={guess.id} key={guess.id} image={guess.locationImage} distance={guess.distance} isGuessed={true} /> })}
                    </GridContainer>

                    <FullWidthContainer>
                        <LoadMore style={{width: '200px'}} onClick={() => setGuessesLimit(guessesLimit + 3) }>Load more</LoadMore>
                    </FullWidthContainer>

                    <div style={{marginTop: '100px'}}>
                        <GreenText style={{marginTop: '150px'}}><Header5 style={{textAlign:'left'}}>New locations</Header5></GreenText>
                        <Paragraph style={{textAlign:'left'}}>New uploads from users. Try to guess all the locations by pressing on a picture.</Paragraph>
                    </div>

                    <GridContainer className='leftAlign'>
                        { locations.slice(0, locationsLimit).map((location: any) => { return <Location id={location.id} key={location.id} image={location.image} /> })}
                    </GridContainer>

                    <FullWidthContainer>
                        <LoadMore style={{width: '200px'}} onClick={() => GetOrRefreshData() }>Load more</LoadMore>
                    </FullWidthContainer>
                </LoggedInContainer>

                <Footer />
            </>
        )
    }
}

export default Home;
