const MOCK_INIT_CATEGORIES = {
    'cat-trending': {
        name: 'Trending',
        filters: [
            { id: 'day', name: 'Today' },
            { id: 'week', name: 'This Week' },
        ]
    },
    'cat-popular': {
        name: 'Most Popular',
        filters: [
            { id: 'movie', name: 'Movie' },
            { id: 'tv', name: 'TV' },
        ]
    },
    'cat-toprated': {
        name: 'Top Rated',
        filters: [
            { id: 'movie', name: 'Movie' },
            { id: 'tv', name: 'TV' },
        ]
    }
};

function fetchInitialCategories() {
    return new Promise(resolve => resolve(MOCK_INIT_CATEGORIES));
}

function fetchShowcaseOfTheDay() {
    return new Promise(resolve => resolve({ id: 330459, type: 'movie' }));
}

function WmdbApi() {

    return {
        fetchInitialCategories,
        fetchShowcaseOfTheDay
    };

}

export default WmdbApi();