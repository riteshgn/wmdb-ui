import { useState, useEffect } from 'react';

import { WmdbApi, TmdbApi } from '@api';

async function _fetchPosterUrl(setImageUrl) {
    const sotd = await WmdbApi.fetchShowcaseOfTheDay();
    const imageUrl = await TmdbApi.fetchBackdropUrl(sotd);

    if (imageUrl) {
        setImageUrl(imageUrl);
    }
}

export function useImageUrl() {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        _fetchPosterUrl(setImageUrl);
    }, []);

    return imageUrl;
};