import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 60px;
    font-size: 16px;

    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 5px;

    background: var(--primary);

    @media screen and (max-width: 900px) {
        font-size: 12px;
    }
`;

export const Span = styled.span`
    color: #fff;
`;