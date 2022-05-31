import styled from 'styled-components';

export const Container = styled.div`
    margin: 100px 0;
    display: grid;
    grid-template-columns: 59% 1% 40%;
`;

export const MapsContainer = styled.div``;

export const LocationImage = styled.div``;

export const GoogleMapsContainer = styled.div``;

export const GuessInfo = styled.div`
    display: grid;
    grid-template-columns: 29% 1% 70%;
    align-items: left;
`;

export const Input = styled.input`
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 18px;
    border: 3px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    &:focus {
        border: 3px solid var(--primary);
    }
`;

export const LeaderboardContainer = styled.div``;
