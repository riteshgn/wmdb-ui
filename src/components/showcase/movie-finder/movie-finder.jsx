import React, { useState } from 'react';

import debounce from 'lodash/debounce';

import { SearchEngine } from '@lib/search-engine';
import Styles from './movie-finder.module.scss';

// Will delay function invocation until this time has elapsed
const DEBOUNCE_WAIT_TIME_IN_MS = 225;
// Max time function is allowed to be delayed
// If a new invocation does not occur by this time then
// the function will be invole with previous arguments
const DEBOUNCE_MAX_WAIT_TIME_IN_MS = 500;

/**
 * @see https://lodash.com/docs/4.17.15#debounce
 */
function _debouncedSearch(setResults) {
    return debounce(
        (e) => SearchEngine.search(e.target.value, setResults),
        DEBOUNCE_WAIT_TIME_IN_MS,
        { maxWait: DEBOUNCE_MAX_WAIT_TIME_IN_MS }
    );
}

export default function MovieFinder({ placeholder }) {
    const [results, setResults] = useState([]);

    return (
        <div className={`dropdown is-active ${Styles.w100}`}>
            <div className={`dropdown-trigger ${Styles.w100}`}>
                <input
                    className="input"
                    type="text"
                    placeholder={placeholder}
                    onChange={_debouncedSearch(setResults)}
                />
            </div>
            {results.length && <div className={`dropdown-menu ${Styles.w100}`} role="menu">
                <div className="dropdown-content">
                    {
                        results.map((result, index) => (
                            <div key={index} className="dropdown-item">
                                <p>#{result.id} <code>&lt;{result.name}&gt;</code></p>
                            </div>
                        ))
                    }
                    {/* <div className="dropdown-item">
                        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                    </div>
                    <hr className="dropdown-divider" />
                    <div className="dropdown-item">
                        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                    </div>
                    <hr className="dropdown-divider" />
                    <button className="button dropdown-item">
                        This is a link
                    </button> */}
                </div>
            </div>}
        </div>
    );

};