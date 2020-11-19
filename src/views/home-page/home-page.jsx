import React from 'react';

import { Layout } from '@views/layout';
import { Showcase } from '@components/showcase';
import { Collections } from '@components/collections';

export default function HomePage() {

    return (
        <Layout>
            <Showcase />
            <Collections />
        </Layout>
    );

};