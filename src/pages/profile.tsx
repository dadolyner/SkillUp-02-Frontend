import * as React from 'react';
import { Container, UserContainer, BestGuessesContainer, MyUploadsContainer } from '../styles/Profile.styled'
import { Avatar } from '../images/ImageExporter';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/Footer/footer';
import { Header4, Header5 } from '../components/Typography/typography.styled';
import { GridContainer } from '../components/Locations/location.styled';
import { LoadMore } from '../components/Buttons/buttons.styled';

const Profile: React.FC = () => {

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

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
                    <GridContainer>

                    </GridContainer>
                    <LoadMore style={{width: '200px'}}>Load More</LoadMore>
                </BestGuessesContainer>

                <MyUploadsContainer>
                    <Header5>My uploads</Header5>
                    <GridContainer>

                    </GridContainer>
                    <LoadMore style={{width: '200px'}}>Load More</LoadMore>
                </MyUploadsContainer>
            </Container>

            <Footer />
        </>
    )
}

export default Profile;