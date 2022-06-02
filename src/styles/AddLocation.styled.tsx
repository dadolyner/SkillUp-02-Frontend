import styled from 'styled-components';
import { Delete } from '../images/ImageExporter';

export const Container = styled.div`
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
`;

export const LocationImage = styled.div`
    width: 60%;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

export const LocationMaps = styled.div`
    width: 60%;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

export const ButtonsContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    & > button {
        margin: 0 10px;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        & > button:first-child {
            width: 100% !important;
        }
    }
`;

export const GuessInfo = styled.div`
    width: 60%;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 18px;
    border: 3px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 98%;
    &:focus {
        border: 3px solid var(--primary);
    }

    @media screen and (max-width: 900px) {
        width: 96%;
    }

    @media screen and (max-width: 700px) {
        width: 94%;
    }
`;

export const DeleteLocation = styled.button`
    border: 0;
    outline: 0;
    border-radius: 5px;
    background-color: var(--delete);
    background-image: url(${Delete});
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: var(--delete-dark);
    }
`;