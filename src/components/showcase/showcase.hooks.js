import { useState, useEffect } from 'react';

import { WmdbApi, TmdbApi } from '@services';

export function useBackgroundPosterStyle() {
    const [backgroundPosterStyle, setBackgroundPosterStyle] = useState({
        backgroundImage:
            `linear-gradient(to right, rgba(0, 0, 0, 1.0) 0%, rgba(255, 255, 255, 0.1) 100%), url('')`
    });

    useEffect(() => {
        async function fetchPosterUrl() {
            const sotd = await WmdbApi.fetchShowcaseOfTheDay();
            const url = await TmdbApi.fetchBackdropUrl(sotd);

            if (url) {
                setBackgroundPosterStyle({
                    backgroundImage:
                        `linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%), url('${url}')`
                });
            }
        }

        fetchPosterUrl();
    }, []);

    return backgroundPosterStyle;
};