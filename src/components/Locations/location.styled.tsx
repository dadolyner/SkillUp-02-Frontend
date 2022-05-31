import styled from 'styled-components';

type LocationProps = {
    image: string;
}

export const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    row-gap: 20px;
    column-gap: 20px;
    width: 100%;
`;

export const Container = styled.div<LocationProps>`
    border-radius: 5px;
    width: 420px;
    height: 240px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
    }

    @media screen and (max-width: 500px) {
        width: 300px;
        height: 200px;
    }
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    &.blured { 
        background-color: rgba(97, 155, 138, 0.8); 
    }
`;

export const Holder = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;