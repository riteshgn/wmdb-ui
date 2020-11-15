const MOCK_INIT_CATEGORIES = {
    'cat-trending': {
        name: 'Trending',
        filters: [
            { id: 'today', name: 'Today' },
            { id: 'week', name: 'This Week' },
        ]
    },
    'cat-popular': {
        name: 'Most Popular',
        filters: [
            { id: 'tv', name: 'TV' },
            { id: 'movie', name: 'Movie' },
        ]
    },
    'cat-latest': {
        name: 'Newly Added',
        filters: [
            { id: 'tv', name: 'TV' },
            { id: 'movie', name: 'Movie' },
        ]
    },
    'cat-rated': {
        name: 'Top Rated',
        filters: [
            { id: 'tv', name: 'TV' },
            { id: 'movie', name: 'Movie' },
        ]
    },
    'cat-prev-view': {
        name: 'Previously Viewed',
        filters: []
    }
};

function fetchInitialCategories() {
    return new Promise(resolve => resolve(MOCK_INIT_CATEGORIES));
}

function fetchShowcaseOfTheDay() {
    return new Promise(resolve => resolve({id: 'mando'}));
}

function WmdbApi() {

    return {
        fetchInitialCategories,
        fetchShowcaseOfTheDay
    };

}

export default WmdbApi();