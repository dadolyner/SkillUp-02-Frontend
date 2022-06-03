import styled from 'styled-components';

type Position = { position: 1 | 2 | 3 | number; };
type ifUser = { ifUser: boolean; }

export const Container = styled.div<ifUser>`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
    width: 100%;
    border-radius: 5px;
    background-color: ${props => props.ifUser ? 'var(--primary)' : ''};
`;

export const Place = styled.div<Position>`
    margin: 10px;
    width: 32px;
    height: 32px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: ${props => props.position === 1 ? 'var(--first-pos)' : props.position === 2 ? 'var(--seccond-pos)' : props.position === 3 ? 'var(--third-pos)' : 'var(--rest-pos)'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;

    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;

export const UserInfoContainer = styled.div<ifUser>`
    font-size: 20px;
    color: ${props => props.ifUser ? 'white' : 'var(--rest-pos)'};
    content: ${props => props.ifUser ? 'You' : ''};
    @media screen and (max-width: 550px) {
        font-size: 16px;
    }
`;

export const TimestampContainer = styled.div<ifUser>`
    color: ${props => props.ifUser ? 'white' : 'var(--rest-pos)'};
    font-size: 14px;

    @media screen and (max-width: 550px) {
        font-size: 12px;
    }
`;

export const DistanceContainer = styled.div<ifUser>`
    margin: 10px;
    font-size: 16px;
    color: ${props => props.ifUser ? 'white' : 'var(--primary)'};
    margin-left: auto;

    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;
