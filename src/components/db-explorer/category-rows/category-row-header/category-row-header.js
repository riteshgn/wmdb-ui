import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryHeader({ categoryName }) {
    return (
        <p className="subtitle">
            {categoryName}
        </p>
    )
};

CategoryHeader.propTypes = {
    categoryName: PropTypes.string.isRequired
}