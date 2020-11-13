import React from 'react';
import PropTypes from 'prop-types';

import { useBackgroundPosterStyle } from './showcase.hooks';

import styles from './showcase.module.scss';

export default function Showcase({ showcase }) {

    const backgroundPosterStyle = useBackgroundPosterStyle(showcase.id);

    return (
        <section
            className={`hero is-light is-bold is-medium has-backdrop-image ${styles.hasBackgroundPosterStyle}`}
            style={backgroundPosterStyle}>

            <div className="hero-body">
                <h1 className="title has-text-light">The Wow Movie Database</h1>
                <input className="input" type="text" placeholder="Search for Movies or TV shows..." />
            </div>

        </section>
    );

}

Showcase.propTypes = {
    showcase: PropTypes.exact({
        id: PropTypes.string.isRequired
    })
};