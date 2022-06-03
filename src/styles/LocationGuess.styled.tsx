import styled from 'styled-components';

export const Container = styled.div`
    margin: 100px 0;
    padding: 0 50px;
    display: grid;
    grid-template-columns: 59% 1% 40%;

    @media (max-width: 900px) {
        grid-template-columns: 100%;
        padding: 0 30px;
    }
`;

export const MapsContainer = styled.div``;

export const LocationImage = styled.div``;

export const GoogleMapsContainer = styled.div``;

export const GuessInfo = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 29% 1% 70%;
    align-items: left;

    @media (max-width: 900px) {
        grid-template-columns: 100%;

        & > p:first-child { order: 1; }
        & > input:first-child { order: 2; }
        
        & > p:last-child { order: 3; }
        & > input:last-child { order: 4; }
    }
`;

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;

    & > p {
        text-align: left !important;
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
    &:focus {
        border: 3px solid var(--primary);
    }
`;

export const LeaderboardContainer = styled.div``;
