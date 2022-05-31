import * as React from 'react';
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation';
import { Header2, Header5, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { Container, BackgroundContainer, LeftBox, RightBox } from '../styles/Home.styled'
import { GreenButton } from '../components/Buttons/buttons.styled';
import { GridContainer } from '../components/Locations/location.styled';
import { Bled, Logatec, GornjiGrad } from '../images/ImageExporter';
import Location from '../components/Locations/location'
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

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
                    <div onClick={() => navigate('/register')}><Location key='bled' image={Bled} distance={250} isLocked={true} isGuessed={false} isMyLocation={false} /></div>
                    <div onClick={() => navigate('/register')}><Location key='logatec' image={Logatec} distance={250} isLocked={true} isGuessed={false} isMyLocation={false} /></div>
                    <div onClick={() => navigate('/register')}><Location key='gornjigrad' image={GornjiGrad} distance={250} isLocked={true} isGuessed={false} isMyLocation={false} /></div>
                </GridContainer>

                <GreenButton style={{width: '150px', marginTop: '80px', marginBottom: '150px'}} onClick={() => navigate('/register')}>SIGN UP</GreenButton>
            </Container>

            <Footer />
        </>
    )
}

export default Home;