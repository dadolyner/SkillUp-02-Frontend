import * as React from 'react';
import { BigContainer, Container, ButtonsContainer } from './options.styled';
import { GreenButton } from '../Buttons/buttons.styled';
import { Header4 } from '../Typography/typography.styled';

const LocationConfirmation: React.FC = () => {
    return (
        <>
            <BigContainer>
                <Container>
                    <Header4>Your location was deleted.</Header4>
                    <ButtonsContainer>
                        <GreenButton>CLOSE</GreenButton>
                    </ButtonsContainer>
                </Container>
            </BigContainer>
        </>
    )
}

export default LocationConfirmation;