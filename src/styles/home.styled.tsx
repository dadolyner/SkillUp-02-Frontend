import styled from 'styled-components';
import { MapBackground } from '../images/ImageExporter';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const BackgroundContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 100%;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        height: 600px;
    }
`;

export const LeftBox = styled.div`
    padding-left: 100px;
    width: 30%;
    @media screen and (max-width: 900px) {
        padding-left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const RightBox = styled.div`
    margin-top: 200px;
    background-image: url(${MapBackground});
    background-size: 90%;
    background-position: top;
    background-repeat: no-repeat;
    height: 800px;
    width: 100%;

    @media screen and (max-width: 900px) {
        margin-top: 50px;
        height: 800px;
        background-size: 80%;
        background-position: center;
    }
`;