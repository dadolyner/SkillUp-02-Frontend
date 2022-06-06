import styled from 'styled-components';
import { Delete, Edit } from '../../images/ImageExporter'

export const GreenButton = styled.button`
    border: 0;
    outline: 0;
    border-radius: 5px;
    color: #fff;
    background: var(--primary);
    width: 100%;
    padding: 10px 32px;
    margin: 10px auto 10px auto;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background: var(--dark);
    }

    &.registerButton { width: 150px; margin-top: 80px; margin-bottom: 150px; }
`

export const WhiteButton = styled.button`
    border: 0;
    outline: 0;
    border-radius: 5px;
    color: #000;
    background: transparent;
    width: 100%;
    padding: 10px 32px;
    margin: 10px auto 10px auto;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background: #ddd;
    }
`

export const DarkButton = styled.button`
    border: 0;
    outline: 0;
    border-radius: 5px;
    color: #fff;
    background: var(--dark);
    width: 100%;
    padding: 10px 32px;
    margin: 10px auto 10px auto;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background: var(--primary);
    }
`;

export const LoadMore = styled.button`
    border: 0;
    outline: 0;
    border-radius: 5px;
    color: var(--primary);
    border: 1px solid var(--primary);
    background-color: transparent;
    width: 100%;
    padding: 10px 32px;
    margin: 10px auto 10px auto;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        color: #fff;
        border: 1px solid #fff;
        background-color: var(--primary);
    }
`;

export const EditLocation = styled.button`
    border: 0;
    outline: 0;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 5px;
    background-color: var(--primary);
    background-image: url(${Edit});
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: var(--dark);
        transform: scale(1.05);
    }
`;


export const DeleteLocation = styled.button`
    border: 0;
    outline: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5px;
    background-color: var(--delete);
    background-image: url(${Delete});
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: var(--delete-dark);
        transform: scale(1.05);
    }
`;

