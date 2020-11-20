import * as Constants from './tmdb.constants';

const Utils = {
    getFullImageUrl,
    getContentList,
    getMediaInfo
}

export default Utils;

/////////////////////////////////////////////////////////

function getFullImageUrl(imagePath) {
    return `${Constants.BASE_URL_IMAGES}/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)${imagePath}`;
}

function getContentList(contentType, results, maxSize) {
    if (!results || !results.length) {
        return [];
    }

    maxSize = maxSize || results.length;

    return results.slice(0, maxSize).map(result => ({
        id: result.id,
        type: contentType,
        name: result.title || result.original_title || result.name || result.original_name,
        imageUrl: (result.backdrop_path || result.poster_path)
            ? `https://image.tmdb.org/t/p/w500${result.backdrop_path || result.poster_path}`
            : null,
    }));
}

function getMediaInfo(contentType, result) {
    return {
        id: result.id,
        type: contentType,
        name: result.title || result.original_title || result.name || result.original_name,
        imageUrl: (result.poster_path || result.backdrop_path)
            ? `https://image.tmdb.org/t/p/w500${result.poster_path || result.backdrop_path}`
            : null,
        genres: result.genres.map(genre => genre.name),
        releaseDate: result.release_date,
        runtime: result.runtime,
        synopsis: {
            tagline: result.tagline,
            overview: result.overview
        },
        rating: {
            score: result.vote_average,
            count: result.vote_count
        }
    }
}