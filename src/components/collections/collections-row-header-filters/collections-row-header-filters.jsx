import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    filters: PropTypes.objectOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isActive: PropTypes.bool
    })),
    handleFilterClick: PropTypes.func.isRequired
};

export default function CollectionsRowHeaderFilters({ filters, handleFilterClick }) {

    function getClassNames(filterId) {
        return `subtitle is-6 ${filters[filterId].isActive ? 'has-text-weight-bold' : 'is-italic'}`;
    }

    return Object.keys(filters).map(filterId => (
        <p
            key={filterId}
            className={getClassNames(filterId)}
            onClick={() => handleFilterClick(filters[filterId])}
        >
            {filters[filterId].name} &nbsp;
        </p>
    ));

};

CollectionsRowHeaderFilters.propTypes = propTypes;