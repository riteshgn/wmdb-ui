import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import { BIMAGE_DIMS, BIMAGE_RATIOS } from './image.constants';

const VALID_DIMENTIONS = [...Object.keys(BIMAGE_DIMS), ...Object.keys(BIMAGE_RATIOS)];

export default function Image({ source, altText, dimension, isRounded }) {
    return (
        <figure
            className={classNames([
                'image',
                BIMAGE_DIMS[dimension] || BIMAGE_RATIOS[dimension]
            ])}
        >
            <img
                className={classNames({'is-rounded': isRounded})}
                src={source}
                alt={altText}
            />
        </figure>
    );
};

Image.propTypes = {
    source: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    dimension: PropTypes.oneOf(VALID_DIMENTIONS),
    isRounded: PropTypes.bool
};