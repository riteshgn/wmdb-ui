import React from 'react';

import { Showcase } from '@components/showcase';
import { Collections } from '@components/collections';

export default function Home() {

    return (
        <div id="app-home">
            <Showcase />
            <Collections />
        </div>
    );

};