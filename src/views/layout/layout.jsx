import React from 'react';

import { Navbar } from '@components/navbar';

export default function Layout(props) {

    return (
        <div className="app-layout">
            <Navbar />
            {props.children}
        </div>
    );

};