import * as Constants from './tmdb.constants';

function getFullImageUrl(imagePath) {
    return `${Constants.BASE_URL_IMAGES}/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)${imagePath}`;
}

function getContentList(results, maxSize) {
    if (!results || !results.length) {
        return [];
    }

    return results.slice(0, maxSize).map(result => ({
        id: result.id,
        name: result.title || result.original_title || result.name || result.original_name,
        image_url: `https://image.tmdb.org/t/p/w500${result.backdrop_path || result.poster_path}`
    }));
}

const Utils = {
    getFullImageUrl,
    getContentList
}

export default Utils;