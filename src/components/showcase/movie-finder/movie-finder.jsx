import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import debounce from 'lodash/debounce';

import SearchEngine from './movie-finder.search-engine';
import Styles from './movie-finder.module.scss';

// Will delay function invocation until this time has elapsed
const DEBOUNCE_WAIT_TIME_IN_MS = 225;
// Max time function is allowed to be delayed
// If a new invocation does not occur by this time then
// the function will be invole with previous arguments
const DEBOUNCE_MAX_WAIT_TIME_IN_MS = 500;

/**
 * The search bar triggers multiple search requests to the backend and not all
 * of them are necessary. The entry when user pauses typing is the most crucial.
 *
 * So the debounce API is used here to rate limit the number of times a request
 * is sent to the search engine.
 *
 * @see https://lodash.com/docs/4.17.15#debounce
 */
function _debouncedSearch(setResults) {
    return debounce(
        (e) => SearchEngine.search(e.target.value, setResults),
        DEBOUNCE_WAIT_TIME_IN_MS,
        { maxWait: DEBOUNCE_MAX_WAIT_TIME_IN_MS }
    );
}

export default function MovieFinder() {
    const [results, setResults] = useState([]);

    return (
        <div className={`dropdown is-active ${Styles.w100}`}>
            <div className={`dropdown-trigger ${Styles.w100}`}>
                <input
                    className="input"
                    type="text"
                    placeholder="Search for a Movie or TV Show..."
                    onChange={_debouncedSearch(setResults)}
                />
            </div>
            {Boolean(results.length) && <div className={`dropdown-menu ${Styles.w100}`} role="menu">
                <div className="dropdown-content">
                    {
                        results.map((result, index) => (
                            <div key={index} className="dropdown-item">
                                <Link to={`/${result.type}/${result.id}`}>
                                    <p>
                                        <strong>{result.name}</strong>
                                    </p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>}
        </div>
    );

};