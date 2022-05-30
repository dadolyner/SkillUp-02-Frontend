import * as React from 'react';
import { Container, NavigationLogo, NavigationItems, Item, Hamburger, Lines, NavTitle, GreenText, TextForImage, Image } from './navigation.styled';
import { ColorLogo, Avatar, Plus } from '../../images/ImageExporter'

const Navigation: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<Container>
				<NavigationLogo onClick={() => {}}>
                    <img src={ColorLogo} alt="logo" width={'30px'} height={'40px'}/>
                    <NavTitle><GreenText>Geo</GreenText>tagger</NavTitle>
                </NavigationLogo>

				<Hamburger className={isOpen ? 'opened' : ''} onClick={() => setIsOpen(!isOpen)}>
					<Lines />
					<Lines />
					<Lines />
				</Hamburger>

				<NavigationItems isOpen={isOpen}>
					<Item onClick={() => { setIsOpen(false) }}>Home</Item>
					<Item onClick={() => { setIsOpen(false) }}>Profile settings</Item>
					<Item onClick={() => { setIsOpen(false) }}>Logout</Item>
					<Item onClick={() => { setIsOpen(false) }}>
                        <TextForImage>David Škulj</TextForImage>
                        <Image src={Avatar} alt="logo" width={'40px'} height={'40px'}/>
                    </Item>
					<Item onClick={() => { setIsOpen(false) }}>
                        <TextForImage>Add location</TextForImage>
                        <Image src={Plus} alt="logo" width={'40px'} height={'40px'}/>
                    </Item>
				</NavigationItems>
			</Container>
		</>
	);
};

export default Navigation;