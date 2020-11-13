import { useState, useEffect } from 'react';

import { TmdbApi } from '@services';

export function useCategorySearch(categoryId) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        async function searchAndSetContent() {
            setContent(await TmdbApi.searchByCategory(categoryId));
        }

        searchAndSetContent();
    }, [categoryId])

    return content;
}
