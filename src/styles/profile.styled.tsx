import styled from 'styled-components';

export const Container = styled.div`
    margin: 100px 0;
    padding: 0 30px;
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    & > img {
        border-radius: 50%;
    }
`;

export const BestGuessesContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    `;

export const MyUploadsContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;