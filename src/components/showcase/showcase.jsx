import React from 'react';

import { MovieFinder } from './movie-finder';

import { useBackgroundPosterStyle } from './showcase.hooks';

import styles from './showcase.module.scss';

export default function Showcase() {

    const backgroundPosterStyle = useBackgroundPosterStyle();

    return (
        <section
            className={`hero is-light is-bold is-medium ${styles.isPoster}`}
            style={backgroundPosterStyle}>

            <div className="hero-body">
                <h1 className="title has-text-light">The Wow Movie Database</h1>
                <MovieFinder placeholder="Search for Movies or TV shows..." />
            </div>

        </section>
    );

};
