import { useState, useEffect } from 'react';

import { WmdbApi } from '@services';

export function useInitialCategories() {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        async function queryAndSetInitialCategories() {
            setCategories(await WmdbApi.getInitialCategories());
        }

        queryAndSetInitialCategories();
    }, []); // empty array ensures that this query is not retriggered on component update!

    return categories;
};

export function useShowcaseOfTheDay() {
    const [showcase, setShowcase] = useState({id: 'star'});

    useEffect(() => {
        async function queryAndSetSotd() {
            setShowcase(await WmdbApi.getShowcaseOfTheDay());
        }

        queryAndSetSotd();
    }, []); // empty array ensures that this query is not retriggered on component update!

    return showcase;
}