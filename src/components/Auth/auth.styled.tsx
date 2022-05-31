import styled from 'styled-components';
import { AuthBackground, ShowPassword } from '../../images/ImageExporter';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 40% 60%;
    @media screen and (max-width: 900px) {
        grid-template-columns: 100%;
	}
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 0 auto;
`;

export const BackgroundContainer = styled.div`
    background-image: url(${AuthBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const Logo = styled.div`
    position: fixed;
    top: 20px;
    left: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;
`;

export const Form = styled.form`
    width: 100%;
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 16px;
    margin: 10px auto;
    text-align: center;
`;

export const FloatingLabel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
    margin: 5px 0;
	& > label {
		position: absolute;
		color: #000;
		font-size: 16px;
		font-family: Arial, Helvetica, sans-serif;
		padding: 0 10px;
		pointer-events: none;
		transform: translate(0, 24px) scale(1);
		transform-origin: top left;
		transition: all 0.2s ease-out;
	}
	&:focus-within > label {
		transform: translate(0, 5px) scale(0.8);
	}
	& > input {
		border: 0;
		outline: 0;
		border-bottom: 2px solid #ddd;
		background: transparent;
		padding: 14px 0 0 10px;
		width: 99%;
		height: 50px;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16px;
        position: relative;
	}
	.Active {
		transform: translate(0, 5px) scale(0.8);
	}
	& > input:focus,
	& > input:active {
		border-bottom: 2px solid var(--primary);
	}
`;

export const HalfWidth = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 30px;
	width: 100%;
`;

export const BottomLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 16px;
`;

export const LinkTitle = styled.div`
    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

export const Link = styled.a`
    color: var(--primary);
    cursor: pointer;
    text-decoration: none;
    &:hover {
        color: var(--dark);
    }
    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

export const ShowPass = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    background: url(${ShowPassword});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 21px;
    height: 15px;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    user-select: none;
    & > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        transition: all 0.2s ease-out;
        &:hover {
            cursor: pointer;
            transform: scale(1.05);
        }
    }
`;
