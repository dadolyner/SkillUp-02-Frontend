import * as React from 'react';
import { Footer, Span } from './footer.styled'

const FooterContainer: React.FC = () => {
    return (
        <>
            <Footer>
                <Span>Geotagger</Span>
                <Span>All Rights Reserved. | skillupmentor.com</Span>
            </Footer>
        </>
    );
}

export default FooterContainer;