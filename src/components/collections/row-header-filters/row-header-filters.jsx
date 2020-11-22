import React from 'react';
import PropTypes from 'prop-types';

import Styles from './row-header-filters.module.scss';

const propTypes = {
    filters: PropTypes.objectOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isActive: PropTypes.bool
    })),
    handleFilterClick: PropTypes.func.isRequired
};

export default function CollectionsRowHeaderFilters({ filters, handleFilterClick }) {

    function getClassNames(filterId) {
        const activeClasses = 'has-text-weight-bold is-3';
        const inactiveClasses = `is-italic is-6 ${Styles.asLink}`;
        return `subtitle mr-3 ${Styles.filter} ${filters[filterId].isActive ? activeClasses : inactiveClasses}`;
    }

    return Object.keys(filters).map(filterId => (
        <p
            key={filterId}
            className={getClassNames(filterId)}
            onClick={() => handleFilterClick(filters[filterId])}
        >
            {filters[filterId].name}
        </p>
    ));

};

CollectionsRowHeaderFilters.propTypes = propTypes;