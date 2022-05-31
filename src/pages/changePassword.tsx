import * as React from 'react';
import { ErrorMessage, Form, FloatingLabel, ShowPass } from '../components/Auth/auth.styled';
import { GreenButton, WhiteButton } from '../components/Buttons/buttons.styled';
import { Header3, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { BigContainer, Container, ButtonsContainer } from '../components/Modals/options.styled';
import { useNavigate } from 'react-router-dom';

const ChangePassword: React.FC = () => {
    const navigate = useNavigate();

	const [isOldPasswordActive, setIsOldPasswordActive] = React.useState(false);
	const [oldPasswordValue, setOldPasswordValue] = React.useState('');

	const [isNewPasswordActive, setIsNewPasswordActive] = React.useState(false);
	const [newPasswordValue, setNewPasswordValue] = React.useState('');

	const [isPasswordConfirmActive, setIsPasswordConfirmActive] = React.useState(false);
	const [passwordConfirmValue, setPasswordConfirmValue] = React.useState('');

	const [errorValue, setErrorValue] = React.useState('');

	const [showPassword, setShowPassword] = React.useState(false);

	const handleOldPasswordChange = (oldPassword: string) => { setOldPasswordValue(oldPassword); oldPassword !== '' ? setIsOldPasswordActive(true) : setIsOldPasswordActive(false); };
	const handleNewPasswordChange = (newPassword: string) => { setNewPasswordValue(newPassword); newPassword !== '' ? setIsNewPasswordActive(true) : setIsNewPasswordActive(false); };
	const handlePasswordConfirmChange = (passwordConfirm: string) => { setPasswordConfirmValue(passwordConfirm); passwordConfirm !== '' ? setIsPasswordConfirmActive(true) : setIsPasswordConfirmActive(false); };

	return (
		<>
            <BigContainer>
                <Container>
                    <Header3>Profile <GreenText>settings.</GreenText></Header3>
                    <Paragraph>Change your password</Paragraph>

                    <ErrorMessage>{errorValue}</ErrorMessage>

			        <Form>
			        	<FloatingLabel>
			        		<label htmlFor='oldPassword' className={isOldPasswordActive ? 'Active' : ''}>Current password</label>
			        		<input id='oldPassword' type={showPassword ? 'text' : 'password'} value={oldPasswordValue} onChange={(e) => handleOldPasswordChange(e.target.value)} />
                            <ShowPass onClick={() => setShowPassword(showPassword ? false : true)}/>
			        	</FloatingLabel>

			        	<FloatingLabel>
			        		<label htmlFor='newPassword' className={isNewPasswordActive ? 'Active' : ''}>New password</label>
			        		<input id='newPassword' type={showPassword ? 'text' : 'password'} value={newPasswordValue} onChange={(e) => handleNewPasswordChange(e.target.value)} />
                            <ShowPass onClick={() => setShowPassword(showPassword ? false : true)}/>
			        	</FloatingLabel>

			        	<FloatingLabel>
			        		<label htmlFor='confPassword' className={isPasswordConfirmActive ? 'Active' : ''}>Confirm new password</label>
			        		<input id='confPassword' type={showPassword ? 'text' : 'password'} value={passwordConfirmValue} onChange={(e) => handlePasswordConfirmChange(e.target.value)} />
                            <ShowPass onClick={() => setShowPassword(showPassword ? false : true)}/>
			        	</FloatingLabel>
			        </Form>

                    <ButtonsContainer>
                        <GreenButton>Submit</GreenButton>
                        <WhiteButton onClick={() => navigate('/profile-settings')}>Cancel</WhiteButton>
                    </ButtonsContainer>
                </Container>
            </BigContainer>
		</>
	);
}

export default ChangePassword;