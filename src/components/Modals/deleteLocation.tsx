import * as React from 'react';
import { BigContainer, Container, ButtonsContainer } from './options.styled';
import { GreenButton, WhiteButton } from '../Buttons/buttons.styled';
import { Header3, Paragraph } from '../Typography/typography.styled';

const DeleteLocation: React.FC = () => {
    return (
        <>
            <BigContainer>
                <Container>
                    <Header3>Are you sure?</Header3>
                    <Paragraph>Your location will be deleted. There is no undo of this action.</Paragraph>
                    <ButtonsContainer>
                        <GreenButton>SUBMIT</GreenButton>
                        <WhiteButton>Cancel</WhiteButton>
                    </ButtonsContainer>
                </Container>
            </BigContainer>
        </>
    )
}

export default DeleteLocation;