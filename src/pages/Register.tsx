import * as React from 'react';
import {
    Container,
    FormContainer,
    BackgroundContainer,
    ImageContainer,
    ErrorMessage,
    Logo,
    Form,
    HalfWidth,
    FloatingLabel,
    BottomLinks,
    LinkTitle,
    Link,
    ShowPass
} from '../components/Auth/auth.styled';
import { NavTitle, GreenText } from '../components/Navigation/navigation.styled';
import { GreenButton } from '../components/Buttons/buttons.styled';
import { Avatar, WhiteLogo, ColorLogo } from '../images/ImageExporter';
import { Header3, Paragraph } from '../components/Typography/typography.styled';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import UploadImageToS3 from '../components/uploadImage';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const inputFile = React.useRef(null);

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
    const [image, setImage] = React.useState(null);

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
    const handlePasswordChange = (password: string) => {
        setPasswordValue(password);
        password !== '' ? setIsPasswordActive(true) : setIsPasswordActive(false);
    };
    const handlePasswordConfirmChange = (passwordConfirm: string) => {
        setPasswordConfirmValue(passwordConfirm);
        passwordConfirm !== '' ? setIsPasswordConfirmActive(true) : setIsPasswordConfirmActive(false);
    };

    const uploadImage = async () => {
        setImage(await UploadImageToS3(inputFile));
    };

    const signUpFunction = async () => {
        if (passwordValue === passwordConfirmValue) {
            try {
                if (!image) {
                    setErrorValue('Please upload an image');
                    return;
                } else {
                    await axios.post('/auth/register', {
                        email: emailValue,
                        first_name: firstNameValue,
                        last_name: lastNameValue,
                        password: passwordValue,
                        avatar: image
                    });
                    navigate('/login');
                }
            } catch (error) {
                if (error.response.status === 409) setErrorValue('Email already in use');
                else if (error.response.status === 400) setErrorValue('All fields are required');
                else setErrorValue('Something went wrong');
            }
        } else {
            setErrorValue('Passwords do not match!');
            return;
        }
    };

    return (
        <>
            <Container>
                <FormContainer>
                    <Logo onClick={() => navigate('/')}>
                        <img src={ColorLogo} alt="logo" width={'30px'} height={'40px'} />
                        <NavTitle>
                            <GreenText>Geo</GreenText>tagger
                        </NavTitle>
                    </Logo>

                    <Header3>Sign up</Header3>
                    <Paragraph>Your name will appear on posts and your public profile.</Paragraph>

                    <ImageContainer>
                        <input type="file" id="avatar" ref={inputFile} style={{ display: 'none' }} onChange={() => uploadImage()} />
                        <img
                            src={image ? image : Avatar}
                            alt="avatar"
                            height={'64px'}
                            width={'64px'}
                            onClick={() => {
                                inputFile.current.click();
                            }}
                        />
                    </ImageContainer>

                    <ErrorMessage>{errorValue}</ErrorMessage>

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

                        <FloatingLabel>
                            <label htmlFor="password" className={isPasswordActive ? 'Active' : ''}>
                                Password
                            </label>
                            <input id="password" type={showPassword ? 'text' : 'password'} value={passwordValue} onChange={(e) => handlePasswordChange(e.target.value)} />
                            <ShowPass onClick={() => setShowPassword(showPassword ? false : true)} />
                        </FloatingLabel>

                        <FloatingLabel>
                            <label htmlFor="passwordConfirm" className={isPasswordConfirmActive ? 'Active' : ''}>
                                Confirm Password
                            </label>
                            <input id="passwordConfirm" type={showPassword ? 'text' : 'password'} value={passwordConfirmValue} onChange={(e) => handlePasswordConfirmChange(e.target.value)} />
                            <ShowPass onClick={() => setShowPassword(showPassword ? false : true)} />
                        </FloatingLabel>
                    </Form>

                    <GreenButton onClick={() => signUpFunction()}>SIGN UP</GreenButton>

                    <BottomLinks>
                        <LinkTitle>Already have an account?</LinkTitle>
                        <Link onClick={() => navigate('/login')}>Sign in</Link>
                    </BottomLinks>
                </FormContainer>

                <BackgroundContainer>
                    <img src={WhiteLogo} alt="logo" height={'300px'} width={'200px'} />
                </BackgroundContainer>
            </Container>
        </>
    );
};

export default Register;
