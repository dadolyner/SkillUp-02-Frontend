import * as React from 'react';
import { Container, NavigationLogo, NavigationItems, Item, Hamburger, Lines, NavTitle, GreenText, TextForImage, Image } from './navigation.styled';
import { ColorLogo, Avatar, Plus } from '../../images/ImageExporter'
import { LoadMore, GreenButton } from '../Buttons/buttons.styled';
import { useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
    const navigate = useNavigate();
	const [isOpen, setIsOpen] = React.useState(false);
    const isLoggedIn = localStorage.getItem('userLoggedIn');

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const logOutFunction = () => {
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('userInfo');
        navigate('/');
    }

	return (
		<>
			<Container className={isLoggedIn ? 'loggedIn' : 'notLoggedIn'}>
                { isLoggedIn && <Image className='guessLocation' src={Plus} alt="logo" width={'40px'} height={'40px'}/>}
                    
				<NavigationLogo onClick={() => { navigate('/') }}>
                    <img src={ColorLogo} alt="logo" width={'30px'} height={'40px'}/>
                    <NavTitle><GreenText>Geo</GreenText>tagger</NavTitle>
                </NavigationLogo>

				<Hamburger className={isOpen ? 'opened' : ''} onClick={() => setIsOpen(!isOpen)}>
					<Lines />
					<Lines />
					<Lines />
				</Hamburger>

				<NavigationItems isOpen={isOpen}>
                    { isLoggedIn ? (
                        <>
                            <Item onClick={() => { setIsOpen(false); navigate('/') }}>Home</Item>
					        <Item onClick={() => { setIsOpen(false); navigate('/profile-settings') }}>Profile settings</Item>
					        <Item onClick={() => { setIsOpen(false); logOutFunction(); }}>Logout</Item>
					        <Item onClick={() => { setIsOpen(false) }}>
                                <Image src={userInfo.avatar ? userInfo.avatar : Avatar} alt="logo" width={'40px'} height={'40px'}/>
                                <TextForImage>{userInfo.first_name} {userInfo.last_name}</TextForImage>
                            </Item>
                            <Item onClick={() => { setIsOpen(false) }}><Image className='navPlus' src={Plus} alt="logo" width={'40px'} height={'40px'}/></Item>
                        </>
                    ) : (
                        <>
                            <Item className='loggedOutHome'>Home</Item>
                            <Item onClick={() => navigate('/login')}><LoadMore>Sign in</LoadMore></Item>
                            <Item onClick={() => navigate('/register')}><GreenButton>SIGN UP</GreenButton></Item>
                        </>
                    ) }

					
				</NavigationItems>
			</Container>
		</>
	);
};

export default Navigation;