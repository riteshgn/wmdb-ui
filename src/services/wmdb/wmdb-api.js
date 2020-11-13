const MOCK_INIT_CATEGORIES = {
    'cat-trending': 'Trending',
    'cat-prev-view': 'Previously Viewed'
};

function getInitialCategories() {
    return new Promise(resolve => resolve(MOCK_INIT_CATEGORIES));
}

function getShowcaseOfTheDay() {
    return new Promise(resolve => resolve({id: 'mando'}));
}

function WmdbApi() {

    return {
        getInitialCategories,
        getShowcaseOfTheDay
    };

}

export default WmdbApi();