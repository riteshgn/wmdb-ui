import { useState, useEffect } from 'react';

import { TmdbApi } from '@services';

export function useContentByCategory(categoryId, filterId) {
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        async function fetchContentByCategory() {
            setContentList(await TmdbApi.fetchContentByCategory(categoryId, filterId));
        }

        fetchContentByCategory();
    }, [categoryId, filterId])

    return contentList;
}
