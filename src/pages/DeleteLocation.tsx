import * as React from 'react';
import { BigContainer, Container, ButtonsContainer } from '../components/Modals/options.styled';
import { GreenButton, WhiteButton } from '../components/Buttons/buttons.styled';
import { Header3, Paragraph } from '../components/Typography/typography.styled';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../api/axios';
import UpdateUserInfo from '../components/updateUserInfo';

const DeleteLocation: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const deleteLocation = async () => {
        try {
            const response = await axios.delete(`/location/delete/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } });
            const { status } = response;
            if (status === 200) {
                await UpdateUserInfo();
                navigate('../delete-location/confirm');
            }
        } catch (error) {}
    };

    return (
        <>
            <BigContainer>
                <Container>
                    <Header3>Are you sure?</Header3>
                    <Paragraph>Your location will be deleted. There is no undo of this action.</Paragraph>
                    <ButtonsContainer>
                        <GreenButton onClick={() => deleteLocation()}>SUBMIT</GreenButton>
                        <WhiteButton onClick={() => navigate('../profile')}>Cancel</WhiteButton>
                    </ButtonsContainer>
                </Container>
            </BigContainer>
        </>
    );
};

export default DeleteLocation;
