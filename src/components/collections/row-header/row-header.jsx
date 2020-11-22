import React from 'react';
import PropTypes from 'prop-types';

import { CollectionsRowHeaderFilters } from '../row-header-filters';

const propTypes = {
    name: PropTypes.string.isRequired,
    filters: PropTypes.objectOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isActive: PropTypes.bool
    })),
    handleFilterClick: PropTypes.func.isRequired
}

export default function CollectionsRowHeader({ name, filters, handleFilterClick }) {

    return (
        <div className="level">
            {/* Left */}
            <div className="level-left">
                <div className="level-item">
                    <p className="title is-3">
                        {name}
                    </p>
                </div>
            </div>

            {/* Right */}
            <div className="level-left">
                <div className="level-item">
                    <CollectionsRowHeaderFilters
                        filters={filters}
                        handleFilterClick={handleFilterClick}
                    />
                </div>
            </div>
        </div>
    )

};

CollectionsRowHeader.propTypes = propTypes;