import styled from 'styled-components';

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