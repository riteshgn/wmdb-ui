import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useSearch } from './movie-finder.hooks';
import Styles from './movie-finder.module.scss';

const propTypes = {
    searchString: PropTypes.string,
    searchResults: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })),
    setSearchString: PropTypes.func.isRequired
};

const defaultProps = {
    searchString: '',
    searchResults: []
};

export function PureMovieFinder({ searchString, searchResults, setSearchString }) {

    return (
        <div className={`dropdown is-active ${Styles.w100}`}>
            <div className={`dropdown-trigger ${Styles.w100}`}>
                <input
                    className="input"
                    type="text"
                    placeholder="Search for a Movie or TV Show..."
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />
            </div>
            {Boolean(searchResults.length) && <div className={`dropdown-menu ${Styles.w100}`} role="menu">
                <div className="dropdown-content">
                    {
                        searchResults.map((result, index) => (
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

PureMovieFinder.propTypes = propTypes;
PureMovieFinder.defaultProps = defaultProps;

export default function MovieFinder() {

    const { searchString, searchResults, setSearchString } = useSearch();
    return (
        <PureMovieFinder
            searchString={searchString}
            searchResults={searchResults}
            setSearchString={setSearchString}
        />
    );

};