import React from 'react';

import Styles from './footnotes.module.scss';

import TmdbLogo from '../../images/tmdb_logo_alt_short_blue.svg';

export default function Footnotes() {

    return (
        <div className="content has-text-centered">
            <p>
                <span className="title is-6">&nbsp; WMDB &nbsp;</span>
                powered by APIs from
                <a
                    href="https://www.themoviedb.org/documentation/api"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={TmdbLogo} alt="TMDb" className={Styles.logo} />
                </a>
            </p>
        </div>
    );

};