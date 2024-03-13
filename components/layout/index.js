import React from 'react';
import Navigation from '../navigation';
import Footer from '../footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main style={{ marginTop: '20px' }}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
