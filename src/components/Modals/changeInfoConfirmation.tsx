import * as React from 'react';
import { BigContainer, Container, ButtonsContainer } from './options.styled';
import { GreenButton } from '../Buttons/buttons.styled';
import { Header4, Paragraph } from '../Typography/typography.styled';

const InfoConfirmation: React.FC = () => {
    return (
        <>
            <BigContainer>
                <Container>
                    <Header4>Information changed</Header4>
                    <Paragraph>Your settings are saved</Paragraph>
                    <ButtonsContainer>
                        <GreenButton>CLOSE</GreenButton>
                    </ButtonsContainer>
                </Container>
            </BigContainer>
        </>
    )
}

export default InfoConfirmation;