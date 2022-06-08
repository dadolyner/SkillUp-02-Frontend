import * as React from 'react';
import { BigContainer, Container, ButtonsContainer } from '../components/Modals/options.styled';
import { GreenButton } from '../components/Buttons/buttons.styled';
import { Header4 } from '../components/Typography/typography.styled';
import { useNavigate } from 'react-router-dom';

const LocationConfirmation: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <BigContainer>
                <Container>
                    <Header4>Your location was deleted.</Header4>
                    <ButtonsContainer>
                        <GreenButton onClick={() => navigate('../profile')}>CLOSE</GreenButton>
                    </ButtonsContainer>
                </Container>
            </BigContainer>
        </>
    );
};

export default LocationConfirmation;
