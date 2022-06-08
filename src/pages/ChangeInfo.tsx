import * as React from 'react';
import { BigContainer, Container, ChangeOptions, ButtonsContainer } from '../components/Modals/options.styled';
import { Form, HalfWidth, FloatingLabel, ErrorMessage, ConfirmMessage } from '../components/Auth/auth.styled';
import { GreenButton, WhiteButton, DarkButton } from '../components/Buttons/buttons.styled';
import { Header3, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import UpdateUserInfo from '../components/updateUserInfo';

const ChangeInfo: React.FC = () => {
    const navigate = useNavigate();

    const [isEmailActive, setIsEmailActive] = React.useState(false);
    const [emailValue, setEmailValue] = React.useState('');
    const [isFirstNameActive, setIsFirstNameActive] = React.useState(false);
    const [firstNameValue, setFirstNameValue] = React.useState('');
    const [isLastNameActive, setIslastNameActive] = React.useState(false);
    const [lastNameValue, setLastNameValue] = React.useState('');

    const [errorValue, setErrorValue] = React.useState('');
    const [confirmValue, setConfirmValue] = React.useState('');

    const handleEmailChange = (email: string) => {
        setEmailValue(email);
        email !== '' ? setIsEmailActive(true) : setIsEmailActive(false);
    };
    const handleFirstNameChange = (first_name: string) => {
        setFirstNameValue(first_name);
        first_name !== '' ? setIsFirstNameActive(true) : setIsFirstNameActive(false);
    };
    const handleLastNameChange = (last_name: string) => {
        setLastNameValue(last_name);
        last_name !== '' ? setIslastNameActive(true) : setIslastNameActive(false);
    };

    const changeUserInfo = async () => {
        try {
            await axios.patch(
                '/auth/change-userInfo',
                {
                    first_name: firstNameValue,
                    last_name: lastNameValue,
                    email: emailValue
                },
                { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
            );
            await UpdateUserInfo();
            setConfirmValue('Your changes have been saved.');
            setErrorValue('');
        } catch (error) {
            if (error.response.status === 400) setErrorValue('Invalid credentials!');
            else if (error.response.status === 401) setErrorValue('Invalid credentials!');
            else {
                setErrorValue('Something went wrong');
                setConfirmValue('');
            }
        }
    };

    const sendPasswordChangeRequest = async () => {
        try {
            await axios.post('/auth/request-password-change', {}, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } });
            setConfirmValue('Request has been send to your email.');
            setErrorValue('');
        } catch (error) {
            if (error.response.status === 400) setErrorValue('Invalid credentials!');
            else if (error.response.status === 401) setErrorValue('Invalid credentials!');
            else {
                setErrorValue('Something went wrong');
                setConfirmValue('');
            }
        }
    };

    return (
        <>
            <BigContainer>
                <Container>
                    <Header3>
                        Profile <GreenText>settings.</GreenText>
                    </Header3>
                    <Paragraph>Change your information</Paragraph>

                    <ErrorMessage>{errorValue}</ErrorMessage>
                    <ConfirmMessage>{confirmValue}</ConfirmMessage>

                    <Form>
                        <FloatingLabel>
                            <label htmlFor="email" className={isEmailActive ? 'Active' : ''}>
                                Email
                            </label>
                            <input id="email" type="email" value={emailValue} onChange={(e) => handleEmailChange(e.target.value)} />
                        </FloatingLabel>

                        <HalfWidth>
                            <FloatingLabel>
                                <label htmlFor="first_name" className={isFirstNameActive ? 'Active' : ''}>
                                    First Name
                                </label>
                                <input id="first_name" type="text" value={firstNameValue} onChange={(e) => handleFirstNameChange(e.target.value)} />
                            </FloatingLabel>

                            <FloatingLabel>
                                <label htmlFor="last_name" className={isLastNameActive ? 'Active' : ''}>
                                    Last Name
                                </label>
                                <input id="last_name" type="email" value={lastNameValue} onChange={(e) => handleLastNameChange(e.target.value)} />
                            </FloatingLabel>
                        </HalfWidth>
                    </Form>

                    <ChangeOptions>
                        <DarkButton onClick={() => sendPasswordChangeRequest()}>Change password</DarkButton>
                        <GreenButton onClick={() => navigate('/change-profile-image')}>Change profile picture</GreenButton>
                    </ChangeOptions>

                    <ButtonsContainer>
                        <GreenButton onClick={() => changeUserInfo()}>Submit</GreenButton>
                        <WhiteButton onClick={() => navigate('/')}>Cancel</WhiteButton>
                    </ButtonsContainer>
                </Container>
            </BigContainer>
        </>
    );
};

export default ChangeInfo;
