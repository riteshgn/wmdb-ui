import { useState, useEffect } from 'react';

import TmdbApi from '@api/tmdb';

async function _fetchMediaInfo(content, setMediaInfo) {
    setMediaInfo(await TmdbApi.fetchMediaInfo(content));
}

export function useMediaInfo(content) {
    const [mediaInfo, setMediaInfo] = useState(content);

    useEffect(() => {
        _fetchMediaInfo(content, setMediaInfo);
    }, [content]);

    return mediaInfo;
}