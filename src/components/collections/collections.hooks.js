import { useState, useEffect } from 'react';

import { WmdbApi } from '@api/wmdb';

export function useInitialCategories() {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        async function fetchInitialCategories() {
            setCategories(await WmdbApi.fetchInitialCategories());
        }

        fetchInitialCategories();
    }, []); // empty array ensures that this query is not retriggered on component update!

    return categories;
};