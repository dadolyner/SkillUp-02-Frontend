import styled from 'styled-components';

type isOpened = {
	isOpen: boolean;
};

export const Container = styled.nav`
	padding: 0 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 20;
	background-color: #fff;
	@media screen and (max-width: 900px) {
        display: grid;
        &.loggedIn { grid-template-columns: 33% 33% 33%; }
        &.notLoggedIn { grid-template-columns: 50% 50%; }
		align-items: left;
	}
`;

export const NavigationLogo = styled.div`
	padding: 16px 0;
	text-decoration: none;
	font-weight: 600;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
    gap: 10px;
	&:hover { cursor: pointer; }
    & > h3 { margin: 0; font-size: 20px; }
`;

export const NavigationItems = styled.div<isOpened>`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
	@media screen and (max-width: 900px) {
        grid-column: 1 / span 3;
		flex-direction: column;
		overflow: hidden;
		max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
		transition: all 0.3s ease;
        justify-content: left;
		align-items: left;
        text-align: left;

        & > a:nth-child(1) { order: 2;}
        & > a:nth-child(2) { order: 3;}
        & > a:nth-child(3) { order: 4;}
        & > a:nth-child(4) { order: 1;}
	}
`;

export const Item = styled.a`
    padding: 0 10px;
	text-align: center;
	text-decoration: none;
	font-size: 16px;
    max-width: max-content;
	transition: all 0.3s ease;
	cursor: pointer;
	text-underline-offset: 5px;
	color: #000;
    display: flex;
    align-items: center;
	&:hover { color: var(--primary); }
    &.loggedOutHome { display: none; }
    @media screen and (max-width: 900px) {
        text-align: left;
        padding: 10px;
        min-width: 100%;
        font-size: 20px;
        &.loggedOutHome { display: flex; margin-bottom: 50px;}
    }
`;

export const Hamburger = styled.div`
	border: 0;
	outline: 0;
	background: transparent;
	display: none;
	flex-direction: column;
	cursor: pointer;
	width: 40px;
	height: 30px;
	justify-self: end;
    opacity: 1;
	span {
		height: 2px;
		width: 25px;
		background: #000;
		margin-bottom: 5px;
	}

    &.opened {
        & > span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        & > span:nth-child(2) { opacity: 0; }
        & > span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }

	@media screen and (max-width: 900px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Lines = styled.span`
    transform-origin: center;
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
`;

export const NavTitle = styled.h3`
    margin: 0;
    font-size: 32px;
    font-weight: 500;
    @media screen and (max-width: 500px) {
        font-size: 24px;
    }
`;

export const GreenText = styled.span`
    color: var(--primary);
`;

export const TextForImage = styled.span`
    display: none;
    margin: 0 0 0 20px;
    @media screen and (max-width: 900px) {
        display: block;
    }
`;

export const Image = styled.img`
    &.guessLocation { display: none; }
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover { transform: scale(1.05); }

    @media screen and (max-width: 900px) {
        &.navPlus { display: none; }
        &.guessLocation { display: block; }
    }
`;