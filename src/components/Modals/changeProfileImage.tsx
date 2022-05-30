import * as React from 'react';
import { ErrorMessage } from '../Auth/auth.styled';
import { GreenButton, WhiteButton } from '../Buttons/buttons.styled';
import { Header3, Paragraph, GreenText } from '../Typography/typography.styled';
import { BigContainer, Container, ButtonsContainer, ImageConatiner } from './options.styled';
import { Avatar } from '../../images/ImageExporter';

const ChangeProfileImage: React.FC = () => {
    const [errorValue, setErrorValue] = React.useState('');
    return (
		<>
        <BigContainer>
            <Container>
                <Header3>Profile <GreenText>settings.</GreenText></Header3>
                <Paragraph>Change your profile photo</Paragraph>

                <ImageConatiner>
			        <img src={Avatar} alt='avatar' height={'64px'} width={'64px'} style={{cursor: 'pointer'}} />
                </ImageConatiner>

                <ErrorMessage>{errorValue}</ErrorMessage>

			    <GreenButton>UPLOAD NEW IMAGE</GreenButton>

                <ButtonsContainer>
                    <GreenButton>Submit</GreenButton>
                    <WhiteButton>Cancel</WhiteButton>
                </ButtonsContainer>
            </Container>
        </BigContainer>
		</>
	);
}

export default ChangeProfileImage;