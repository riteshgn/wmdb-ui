import Common from '../tmdb.common';
import Utils from '../tmdb.utils';

export default async function fetchContentByCategory(category, filter) {
    console.log('filter: ', filter)

    let response = {};

    switch (category) {
        case 'cat-trending':
            response = await Common.fetchTrending(filter);
            break;

        case 'cat-popular':
            response = await Common.fetchPopular(filter);
            break;

        case 'cat-toprated':
            response = await Common.fetchTopRated(filter);
            break;

        default:
            return new Promise(resolve => resolve({}));
    }

    if (!response || !response.results) {
        return [];
    }

    return Utils.getContentList(response.results, 4);
}