import ServiceUtils from '../services.utils';
import * as Constants from './tmdb.constants';

/**
 * Retrieves information about a media type
 * https://developers.themoviedb.org/3/movies/get-movie-details
 * https://developers.themoviedb.org/3/tv/get-tv-details
 *
 * @param {string} type - @see Constants.CONTENT_TYPE_*
 * @param {number} id   - A valid content ID number
 */
async function fetchDetailsByTypeAndId({ type, id }) {
    const url = `${Constants.BASE_URL_API_V3}/${type}/${id}?api_key=${Constants.API_KEY}&language=en-US`;
    return await ServiceUtils.get(url);
}

/**
 * https://developers.themoviedb.org/3/trending/get-trending
 *
 * @param {string} timeWindow - day, week
 * @param {number} page       - @default 1
 */
async function fetchTrending(timeWindow, page = 1) {
    const url =
        `${Constants.BASE_URL_API_V3}/trending/` +
        `${Constants.CONTENT_TYPE_ALL}/${timeWindow}` +
        `?api_key=${Constants.API_KEY}&language=en-US&page=${page}`;
    return await ServiceUtils.get(url);
}

/**
 * Fetches popular content by given media type
 * https://developers.themoviedb.org/3/movies/get-popular-movies
 * https://developers.themoviedb.org/3/tv/get-popular-tv-shows
 *
 * @param {string} type - @see Constants.CONTENT_TYPE_*
 * @param {number} page - @default 1
 */
async function fetchPopular(type, page = 1) {
    const url =
        `${Constants.BASE_URL_API_V3}/${type}/popular` +
        `?api_key=${Constants.API_KEY}&language=en-US&page=${page}`;
    return await ServiceUtils.get(url);
}

/**
 * Fetches newly added content by given media type
 * https://developers.themoviedb.org/3/movies/get-top-rated-movies
 * https://developers.themoviedb.org/3/tv/get-top-rated-tv
 *
 * @param {string} type - @see Constants.CONTENT_TYPE_*
 * @param {number} page - @default 1
 */
async function fetchTopRated(type, page = 1) {
    const url =
        `${Constants.BASE_URL_API_V3}/${type}/top_rated` +
        `?api_key=${Constants.API_KEY}&language=en-US&page=${page}`;
    return await ServiceUtils.get(url);
}

const Common = {
    fetchDetailsByTypeAndId,
    fetchTrending,
    fetchPopular,
    fetchTopRated
}

export default Common;