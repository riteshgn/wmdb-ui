import Bloodhound from 'bloodhound-js';

import { identifyResult, compareResults } from './search-engine.helper';
import { TmdbApi } from '@api';

const MIN_REQUIRED_IN_LOCAL = 5;

/**
 * Implements a search engine over tmdb database
 *
 * Currently implemented using bloodhound engine (from twitter typeahead)
 * https://github.com/twitter/typeahead.js/blob/master/doc/bloodhound.md
 */
function SearchEngine() {

    const self = this;

    self._engine = null;
    self._initialized = false;

    return {
        /**
         * Attempts to initialize the search engine
         * @returns true if successful otherwise false
         */
        initialize: async () => await _initialize(self),

        /**
         * Performs a search based on provided value
         * Returns the results via the setResults callback function
         *
         * The callback function has signature `fn(results)`
         *
         * It will internally check if the engine has been initialized
         * and if not then try and do the initialization
         *
         * An error will be thrown if initialization fails
         */
        search: (value, setResults) => _search(self, value, setResults)
    }

}

export default (new SearchEngine());

////////////////////////////////////////////////////////////////////

async function _checkAndDoInitialization(that, requestor) {
    if (!that._initialized && !await _initialize(that)) {
        throw new Error(`[${requestor}] Could not initialize search engine`)
    }

    return true;
}

async function _initialize(that) {
    if (that._initialized) {
        return true;
    }

    try {

        that._engine = new Bloodhound({
            // Setting this to false so that we can track initialization success/failure
            initialize: false,
            identify: identifyResult,
            sorter: compareResults,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        });

        await that._engine.initialize();
        that._initialized = true

    } catch (error) {
        console.error(`Error initializing search engine: ${error}`);
    }

    return that._initialized;
}

async function _search(that, value, setResults) {
    if (!value) {
        setResults([]);
    }

    await _checkAndDoInitialization(that, '_search');

    that._engine.search(value, (results) => _queryRemoteIfRequired(that, value, results, setResults));
}

async function _queryRemoteIfRequired(that, value, currentResults, setResults) {
    if (!value) {
        // Empty string queried so no results possible!
        return setResults([]);
    }

    // TODO: check movies and tv individually
    // TODO: throttle backend calls

    if (currentResults.length > MIN_REQUIRED_IN_LOCAL) {
        // Sufficient results have been found in local so return local results
        return setResults(currentResults);
    }

    // Either no results were found in local
    // OR local does not have sufficient results
    // So querying remote database

    const results = await TmdbApi.search('movie', value);
    that._engine.add(results);
    setResults(results);
}