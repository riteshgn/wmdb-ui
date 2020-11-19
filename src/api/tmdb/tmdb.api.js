import ServiceUtils from '../services.utils';
import * as Constants from './tmdb.constants';

const Common = {
    /**
     * Retrieves information about a media type
     * https://developers.themoviedb.org/3/movies/get-movie-details
     * https://developers.themoviedb.org/3/tv/get-tv-details
     *
     * @param {string} type - @see Constants.CONTENT_TYPE_*
     * @param {number} id   - A valid content ID number
     */
    fetchDetailsByTypeAndId,

    /**
     * https://developers.themoviedb.org/3/trending/get-trending
     *
     * @param {string} timeWindow - day, week
     * @param {number} page       - @default 1
     */
    fetchTrending,

    /**
     * Fetches popular content by given media type
     * https://developers.themoviedb.org/3/movies/get-popular-movies
     * https://developers.themoviedb.org/3/tv/get-popular-tv-shows
     *
     * @param {string} type - @see Constants.CONTENT_TYPE_*
     * @param {number} page - @default 1
     */
    fetchPopular,

    /**
     * Fetches newly added content by given media type
     * https://developers.themoviedb.org/3/movies/get-top-rated-movies
     * https://developers.themoviedb.org/3/tv/get-top-rated-tv
     *
     * @param {string} type - @see Constants.CONTENT_TYPE_*
     * @param {number} page - @default 1
     */
    fetchTopRated,

    /**
     * Query the TMDb for a given search string by media type
     * https://developers.themoviedb.org/3/search/search-movies
     * https://developers.themoviedb.org/3/search/search-tv-shows
     *
     * @param {string} type  - @see Constants.CONTENT_TYPE_*
     *                         (only movie and tv supported)
     * @param {string} query - The search string to query
     * @param {number} page  - @default 1
     */
    search
}

export default Common;

/////////////////////////////////////////////////////////////////////////////////////////

async function fetchDetailsByTypeAndId({ type, id }) {
    const url = `${Constants.BASE_URL_API_V3}/${type}/${id}?api_key=${Constants.API_KEY}&language=en-US`;
    return await ServiceUtils.get(url);
}

async function fetchTrending(timeWindow, page = 1) {
    const url =
        `${Constants.BASE_URL_API_V3}/trending/` +
        `${Constants.CONTENT_TYPE_ALL}/${timeWindow}` +
        `?api_key=${Constants.API_KEY}&language=en-US&page=${page}`;
    return await ServiceUtils.get(url);
}

async function fetchPopular(type, page = 1) {
    const url =
        `${Constants.BASE_URL_API_V3}/${type}/popular` +
        `?api_key=${Constants.API_KEY}&language=en-US&page=${page}`;
    return await ServiceUtils.get(url);
}

async function fetchTopRated(type, page = 1) {
    const url =
        `${Constants.BASE_URL_API_V3}/${type}/top_rated` +
        `?api_key=${Constants.API_KEY}&language=en-US&page=${page}`;
    return await ServiceUtils.get(url);
}

async function search(type, query, page = 1) {
    const url =
        `${Constants.BASE_URL_API_V3}/search/${type}` +
        `?api_key=${Constants.API_KEY}&query=${query}&language=en-US&page=${page}`;
    return await ServiceUtils.get(url);
}