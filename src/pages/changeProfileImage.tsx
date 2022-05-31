import * as React from 'react';
import { ErrorMessage } from '../components/Auth/auth.styled';
import { GreenButton, WhiteButton } from '../components/Buttons/buttons.styled';
import { Header3, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { BigContainer, Container, ButtonsContainer, ImageConatiner } from '../components/Modals/options.styled';
import { Avatar } from '../images/ImageExporter';
import { useNavigate } from 'react-router-dom';

const ChangeProfileImage: React.FC = () => {
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const [errorValue, setErrorValue] = React.useState('');
    return (
		<>
            <BigContainer>
                <Container>
                    <Header3>Profile <GreenText>settings.</GreenText></Header3>
                    <Paragraph>Change your profile photo</Paragraph>

                    <ImageConatiner>
		    	        <img src={userInfo.avatar ? userInfo.avatar : Avatar} alt='avatar' height={'64px'} width={'64px'} style={{cursor: 'pointer'}} />
                    </ImageConatiner>

                    <ErrorMessage>{errorValue}</ErrorMessage>

		    	    <GreenButton>UPLOAD NEW IMAGE</GreenButton>

                    <ButtonsContainer>
                        <GreenButton>Submit</GreenButton>
                        <WhiteButton onClick={() => navigate('/profile-settings')}>Cancel</WhiteButton>
                    </ButtonsContainer>
                </Container>
            </BigContainer>
		</>
	);
}

export default ChangeProfileImage;