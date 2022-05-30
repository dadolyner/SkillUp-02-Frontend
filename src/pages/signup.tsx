import * as React from 'react';
import { Container, FormContainer, BackgroundContainer, ErrorMessage, Logo, Form, HalfWidth, FloatingLabel, BottomLinks, LinkTitle, Link, ShowPass } from '../components/Auth/auth.styled';
import { NavTitle, GreenText } from '../components/Navigation/navigation.styled';
import { GreenButton } from '../components/Buttons/buttons.styled';
import { Avatar, WhiteLogo, ColorLogo } from '../images/ImageExporter';
import { Header3, Paragraph } from '../components/Typography/typography.styled';

const SignUp: React.FC = () => {
	const [isEmailActive, setIsEmailActive] = React.useState(false);
	const [emailValue, setEmailValue] = React.useState('');
	const [isFirstNameActive, setIsFirstNameActive] = React.useState(false);
	const [firstNameValue, setFirstNameValue] = React.useState('');
	const [isLastNameActive, setIslastNameActive] = React.useState(false);
	const [lastNameValue, setLastNameValue] = React.useState('');
	const [isPasswordActive, setIsPasswordActive] = React.useState(false);
	const [passwordValue, setPasswordValue] = React.useState('');
	const [isPasswordConfirmActive, setIsPasswordConfirmActive] = React.useState(false);
	const [passwordConfirmValue, setPasswordConfirmValue] = React.useState('');

	const [errorValue, setErrorValue] = React.useState('');

	const [showPassword, setShowPassword] = React.useState(false);

	const handleEmailChange = (email: string) => { setEmailValue(email); email !== '' ? setIsEmailActive(true) : setIsEmailActive(false); };
	const handleFirstNameChange = (first_name: string) => { setFirstNameValue(first_name); first_name !== '' ? setIsFirstNameActive(true) : setIsFirstNameActive(false); };
	const handleLastNameChange = (last_name: string) => { setLastNameValue(last_name); last_name !== '' ? setIslastNameActive(true) : setIslastNameActive(false); };
    const handlePasswordChange = (password: string) => { setPasswordValue(password); password !== '' ? setIsPasswordActive(true) : setIsPasswordActive(false); };
	const handlePasswordConfirmChange = (passwordConfirm: string) => { setPasswordConfirmValue(passwordConfirm); passwordConfirm !== '' ? setIsPasswordConfirmActive(true) : setIsPasswordConfirmActive(false); };

	return (
		<>
            <Container>
                <FormContainer>
                    <Logo>
                        <img src={ColorLogo} alt="logo" width={'30px'} height={'40px'}/>
                        <NavTitle><GreenText>Geo</GreenText>tagger</NavTitle>
                    </Logo>

                    <Header3>Sign up</Header3>
			        <Paragraph>Your name will appear on posts and your public profile.</Paragraph>

			        <img src={Avatar} alt='avatar' height={'64px'} width={'64px'}/>

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

			        	<FloatingLabel>
			        		<label htmlFor='password' className={isPasswordActive ? 'Active' : ''}>Password</label>
			        		<input id='password' type={showPassword ? 'text' : 'password'} value={passwordValue} onChange={(e) => handlePasswordChange(e.target.value)} />
                            <ShowPass onClick={() => setShowPassword(showPassword ? false : true)}/>
			        	</FloatingLabel>

			        	<FloatingLabel>
			        		<label htmlFor='passwordConfirm' className={isPasswordConfirmActive ? 'Active' : ''}>Confirm Password</label>
			        		<input id='passwordConfirm' type={showPassword ? 'text' : 'password'} value={passwordConfirmValue} onChange={(e) => handlePasswordConfirmChange(e.target.value)} />
                            <ShowPass onClick={() => setShowPassword(showPassword ? false : true)}/>
			        	</FloatingLabel>
			        </Form>
			        <GreenButton>SIGN UP</GreenButton>

                    <BottomLinks>
                        <LinkTitle>Already have an account?</LinkTitle>
                        <Link href='/'>Sign in</Link>
                    </BottomLinks>
                </FormContainer>

                <BackgroundContainer>
                    <img src={WhiteLogo} alt='logo' height={'300px'} width={'200px'}/>
                </BackgroundContainer>
            </Container>
		</>
	);
};

export default SignUp;
