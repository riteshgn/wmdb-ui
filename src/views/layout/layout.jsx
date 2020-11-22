import React from 'react';

import { Navbar } from '@components/navbar';
import { Footnotes } from '@components/footnotes';

export default function Layout(props) {

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <header>
                <Navbar />
            </header>
            <div
                className="mx-6 mt-6"
                style={{paddingBottom: '13rem'}}
            >
                {props.children}
            </div>
            <footer
                className="footer"
                style={{position: 'absolute', bottom: 0, width: '100%'}}
            >
                <Footnotes />
            </footer>
        </div>
    );

};