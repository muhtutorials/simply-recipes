import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import 'normalize.css';

import '../assets/css/main.css';

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}