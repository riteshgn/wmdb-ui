import Common from '../tmdb.common';
import Utils from '../tmdb.utils';

export default async function fetchBackdropUrl(content, strict = false) {
    const response = await Common.fetchDetailsByTypeAndId(content);

    function __logError(reason) {
        console.error(`${reason} for ${content.type} #${content.id}`);
    }

    if (!response) {
        __logError('No data available');
        return null;
    }

    if (response.backdrop_path) {
        return Utils.getFullImageUrl(response.backdrop_path);
    }

    if (!strict && response.poster_path) {
        return Utils.getFullImageUrl(response.poster_path);
    }

    __logError('No backdrop image found');
    return null;
}