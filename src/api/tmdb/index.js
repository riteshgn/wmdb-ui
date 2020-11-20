import fetchContentByCategory from './services/fetchContentByCategory';
import fetchBackdropUrl from './services/fetchBackdropUrl';
import fetchMediaInfo from './services/fetchMediaInfo';
import search from './services/search';

const TmdbApi = {
    fetchContentByCategory,
    fetchBackdropUrl,
    fetchMediaInfo,
    search
}

export default TmdbApi;