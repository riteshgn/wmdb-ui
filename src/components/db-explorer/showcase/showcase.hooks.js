import { useState, useEffect } from 'react';

import { TmdbApi } from '@services';

export function useBackgroundPosterStyle(showcaseId) {
    const [backgroundPosterStyle, setBackgroundPosterStyle] = useState({
        backgroundImage:
            `linear-gradient(to right, rgba(0, 0, 255, 0.8) 0%, rgba(0, 255, 255, 0.1) 100%), url('')`
    });

    useEffect(() => {
        async function findPosterUrl() {
            const url = await TmdbApi.getPosterUrl(showcaseId);
            if (url) {
                setBackgroundPosterStyle({
                    backgroundImage:
                        `linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%), url('${url}')`
                });
            }
        }

        findPosterUrl();
    }, [showcaseId]);

    return backgroundPosterStyle;
};