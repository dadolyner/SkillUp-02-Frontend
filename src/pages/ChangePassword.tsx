import * as React from 'react';
import { ErrorMessage, Form, FloatingLabel, ShowPass, ConfirmMessage } from '../components/Auth/auth.styled';
import { GreenButton, WhiteButton } from '../components/Buttons/buttons.styled';
import { Header3, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { BigContainer, Container, ButtonsContainer } from '../components/Modals/options.styled';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../api/axios';

const ChangePassword: React.FC = () => {
    const navigate = useNavigate();
    const { token } = useParams();

    const [isOldPasswordActive, setIsOldPasswordActive] = React.useState(false);
    const [oldPasswordValue, setOldPasswordValue] = React.useState('');

    const [isNewPasswordActive, setIsNewPasswordActive] = React.useState(false);
    const [newPasswordValue, setNewPasswordValue] = React.useState('');

    const [isPasswordConfirmActive, setIsPasswordConfirmActive] = React.useState(false);
    const [passwordConfirmValue, setPasswordConfirmValue] = React.useState('');

    const [errorValue, setErrorValue] = React.useState('');
    const [confirmValue, setConfirmValue] = React.useState('');

    const [showPassword, setShowPassword] = React.useState(false);

    const handleOldPasswordChange = (oldPassword: string) => {
        setOldPasswordValue(oldPassword);
        oldPassword !== '' ? setIsOldPasswordActive(true) : setIsOldPasswordActive(false);
    };
    const handleNewPasswordChange = (newPassword: string) => {
        setNewPasswordValue(newPassword);
        newPassword !== '' ? setIsNewPasswordActive(true) : setIsNewPasswordActive(false);
    };
    const handlePasswordConfirmChange = (passwordConfirm: string) => {
        setPasswordConfirmValue(passwordConfirm);
        passwordConfirm !== '' ? setIsPasswordConfirmActive(true) : setIsPasswordConfirmActive(false);
    };

    const changePassword = async () => {
        try {
            if (newPasswordValue === passwordConfirmValue) {
                await axios.patch(
                    `/auth/change-password/${token}`,
                    {
                        old_password: oldPasswordValue,
                        new_password: newPasswordValue
                    },
                    { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
                );
                setConfirmValue('Password changed successfully');
                setErrorValue('');
            }
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
                    <Paragraph>Change your password</Paragraph>

                    <ErrorMessage>{errorValue}</ErrorMessage>
                    <ConfirmMessage>{confirmValue}</ConfirmMessage>

                    <Form>
                        <FloatingLabel>
                            <label htmlFor="oldPassword" className={isOldPasswordActive ? 'Active' : ''}>
                                Current password
                            </label>
                            <input id="oldPassword" type={showPassword ? 'text' : 'password'} value={oldPasswordValue} onChange={(e) => handleOldPasswordChange(e.target.value)} />
                            <ShowPass onClick={() => setShowPassword(showPassword ? false : true)} />
                        </FloatingLabel>

                        <FloatingLabel>
                            <label htmlFor="newPassword" className={isNewPasswordActive ? 'Active' : ''}>
                                New password
                            </label>
                            <input id="newPassword" type={showPassword ? 'text' : 'password'} value={newPasswordValue} onChange={(e) => handleNewPasswordChange(e.target.value)} />
                            <ShowPass onClick={() => setShowPassword(showPassword ? false : true)} />
                        </FloatingLabel>

                        <FloatingLabel>
                            <label htmlFor="confPassword" className={isPasswordConfirmActive ? 'Active' : ''}>
                                Confirm new password
                            </label>
                            <input id="confPassword" type={showPassword ? 'text' : 'password'} value={passwordConfirmValue} onChange={(e) => handlePasswordConfirmChange(e.target.value)} />
                            <ShowPass onClick={() => setShowPassword(showPassword ? false : true)} />
                        </FloatingLabel>
                    </Form>

                    <ButtonsContainer>
                        <GreenButton onClick={() => changePassword()}>Submit</GreenButton>
                        <WhiteButton onClick={() => navigate('/profile-settings')}>Cancel</WhiteButton>
                    </ButtonsContainer>
                </Container>
            </BigContainer>
        </>
    );
};

export default ChangePassword;
