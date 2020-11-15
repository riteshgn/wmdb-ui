import React from 'react';

import { CollectionsRow } from './collections-row';

import { useInitialCategories } from './collections.hooks';

export default function Collections() {

    const categories = useInitialCategories();

    return Object.keys(categories).map(categoryId => (
        <CollectionsRow
            key={categoryId}
            category={{
                id: categoryId,
                ...categories[categoryId]
            }}
        />
    ));

};
