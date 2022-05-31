import * as React from 'react';
import { BigContainer, Container, ChangeOptions, ButtonsContainer } from '../components/Modals/options.styled';
import { Form, HalfWidth, FloatingLabel, ErrorMessage } from '../components/Auth/auth.styled';
import { GreenButton, WhiteButton, DarkButton } from '../components/Buttons/buttons.styled';
import { Header3, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { useNavigate } from 'react-router-dom';

const ChangeInfo: React.FC = () => {
    const navigate = useNavigate();

    const [isEmailActive, setIsEmailActive] = React.useState(false);
	const [emailValue, setEmailValue] = React.useState('');
	const [isFirstNameActive, setIsFirstNameActive] = React.useState(false);
	const [firstNameValue, setFirstNameValue] = React.useState('');
	const [isLastNameActive, setIslastNameActive] = React.useState(false);
	const [lastNameValue, setLastNameValue] = React.useState('');

	const [errorValue, setErrorValue] = React.useState('');

	const handleEmailChange = (email: string) => { setEmailValue(email); email !== '' ? setIsEmailActive(true) : setIsEmailActive(false); };
	const handleFirstNameChange = (first_name: string) => { setFirstNameValue(first_name); first_name !== '' ? setIsFirstNameActive(true) : setIsFirstNameActive(false); };
	const handleLastNameChange = (last_name: string) => { setLastNameValue(last_name); last_name !== '' ? setIslastNameActive(true) : setIslastNameActive(false); };

	return (
		<>
            <BigContainer>
                <Container>
                    <Header3>Profile <GreenText>settings.</GreenText></Header3>
                    <Paragraph>Change your information</Paragraph>

                    <ErrorMessage>{errorValue}</ErrorMessage>
        
                    <Form>
                        <FloatingLabel>
			            	<label htmlFor='email' className={isEmailActive ? 'Active' : ''}>Email</label>
			            	<input id='email' type='email' value={emailValue} onChange={(e) => handleEmailChange(e.target.value)} />
			            </FloatingLabel>
        
			            <HalfWidth>
			            	<FloatingLabel>
			            		<label htmlFor='first_name' className={isFirstNameActive ? 'Active' : ''}>First Name</label>
			            		<input id='first_name' type='text' value={firstNameValue} onChange={(e) => handleFirstNameChange(e.target.value)} />
			            	</FloatingLabel>
        
			            	<FloatingLabel>
			            		<label htmlFor='last_name' className={isLastNameActive ? 'Active' : ''}>Last Name</label>
			            		<input id='last_name' type='email' value={lastNameValue} onChange={(e) => handleLastNameChange(e.target.value)} />
			            	</FloatingLabel>
			            </HalfWidth>
                    </Form>
        
                    <ChangeOptions>
                            <DarkButton onClick={() => navigate('/change-password/123')}>Change password</DarkButton>
                            <GreenButton onClick={() => navigate('/change-profile-image')}>Change profile picture</GreenButton>
                    </ChangeOptions>
        
                    <ButtonsContainer>
                        <GreenButton>Submit</GreenButton>
                        <WhiteButton onClick={() => navigate('/')}>Cancel</WhiteButton>
                    </ButtonsContainer>
        
                </Container>
            </BigContainer>

		</>
	);
}

export default ChangeInfo;