
const MOCK_CAT_CONTENT = {
    'cat-trending': [
        {
            id: 1,
            name: 'Avengers: Endgame',
            image_url: 'https://image.tmdb.org/t/p/w500/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg',
        },
        {
            id: 2,
            name: 'Jo Jo Rabbit',
            image_url: 'https://image.tmdb.org/t/p/w500/lTyikzfGgRX5ZqIfVeT26APYfRL.jpg'
        }
    ],

    'cat-prev-view': [
        {
            id: 1,
            name: 'The Crown',
            image_url: 'https://image.tmdb.org/t/p/w500/4InrdamBEM31unNiuEHGYTPX1e2.jpg',
        }
    ]
}

const MOCK_POSTER_URLS = {
    'mando': 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ijMGlJKqcslswWUzTEwScm82Gs.jpg'
}

function fetchPosterUrl(contentId) {
    return new Promise(resolve => resolve(MOCK_POSTER_URLS[contentId] || ''));
}

function fetchContentByCategory(category) {
    return new Promise(resolve => resolve(MOCK_CAT_CONTENT[category] || []));
}

function TmdbApi() {
    return {
        fetchContentByCategory,
        fetchPosterUrl,
    };
}

export default TmdbApi();