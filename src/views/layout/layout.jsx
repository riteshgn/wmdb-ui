import React from 'react';

import { Navbar } from '@components/navbar';

export default function Layout(props) {

    return (
        <div className="app-layout">
            <header>
                <Navbar />
            </header>
            <div className="columns mt-1">
                <div className="column is-10 is-offset-1">
                    {props.children}
                </div>
            </div>
        </div>
    );

};