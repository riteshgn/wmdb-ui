import React from 'react';

import { Showcase } from '@components/db-explorer/showcase';
import { CategoryRows } from '@components/db-explorer/category-rows';

import { useInitialCategories, useShowcaseOfTheDay } from './home.hooks';

export default function Home() {
    const showcase = useShowcaseOfTheDay();
    const categories = useInitialCategories();

    return (
        <div id="app-home">
            <Showcase showcase={showcase} />
            <CategoryRows categories={categories} />
        </div>
    );
};