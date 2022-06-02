import styled from 'styled-components';

export const Container = styled.div`
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    width: 100%;

    & > img {
        @media screen and (max-width: 900px) {
            width: 100%;
            height: auto;
        }
    }
`;

export const LocationInfo = styled.div``;

export const BottomButtons = styled.div`
    width: 860px;
    display: grid;
    grid-template-columns: 30% 30% 20% 20%;

    @media screen and (max-width: 900px) {
        width: 100%;
        grid-template-columns: 50% 50%;
        & > button:first-child {
            grid-column: 1 / span 2;
        }
        & > br {
            display: none;
        }
    }
`;