import * as React from 'react';
import { FooterContainer, Span } from './footer.styled'

const Footer: React.FC = () => {
    return (
        <>
            <FooterContainer>
                <Span>Geotagger</Span>
                <Span>All Rights Reserved. | skillupmentor.com</Span>
            </FooterContainer>
        </>
    );
}

export default Footer;