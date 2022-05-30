import * as React from 'react';
import { Container, NavigationLogo, NavigationItems, Item, Hamburger, Lines, NavTitle, GreenText } from './navigation.styled';
import { ColorLogo } from '../../images/ImageExporter'

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
					<Item onClick={() => { setIsOpen(false) }}>Avatar</Item>
					<Item onClick={() => { setIsOpen(false) }}>Plus</Item>
				</NavigationItems>
			</Container>
		</>
	);
};

export default Navigation;