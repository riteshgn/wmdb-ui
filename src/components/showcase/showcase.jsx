import React from 'react';
import classNames from 'classnames';

import { MovieFinder } from './movie-finder';
import PropTypes from 'prop-types';

import { useImageUrl } from './showcase.hooks';
import Styles from './showcase.module.scss';

const propTypes = {
    imageUrl: PropTypes.string
};

export function PureShowcase({ imageUrl }) {

    return (
        <section
            className={classNames([
                'hero',
                'is-medium',
                Styles.hasBackground,
                Styles.isGradient,
            ])}
        >

            {Boolean(imageUrl) &&
                <img
                    className={Styles.background}
                    src={imageUrl}
                    alt="movie poster of the day"
                />}

            <div className="hero-body">
                <h1 className="title">The Wow Movie Database</h1>
                <MovieFinder />
            </div>

        </section>
    );

};

PureShowcase.propTypes = propTypes;


export default function Showcase() {

    const imageUrl = useImageUrl();
    return <PureShowcase imageUrl={imageUrl} />

};
