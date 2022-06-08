import styled from 'styled-components';

export const BigContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 40px;
    background-color: #fff;
    min-width: 200px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;

    @media screen and (max-width: 900px) {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
    }
`;

export const ChangeOptions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    column-gap: 20px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const ImageConatiner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
    & > img {
        border-radius: 50%;
    }
`;
