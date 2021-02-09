import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles } from 'twin.macro';
import { Global } from '@emotion/react';
import { Header } from '../header';
import { Footer } from '../footer';
import { BaseStyles, Container, Main } from './layout.styles';

const Layout = ({ children }) => {

    return (
        <>
            <GlobalStyles />
            <Global styles={BaseStyles} />
            <Container>
                <Header siteTitle="WMDB" />
                <Main>{children}</Main>
                <Footer />
            </Container>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;