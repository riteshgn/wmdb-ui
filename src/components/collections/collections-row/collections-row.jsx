import React from 'react';
import PropTypes from 'prop-types';

import { CollectionsRowHeader } from '../collections-row-header';
import { CollectionsRowItemList } from '../collections-row-item-list';

import { useCategoryFilters } from './collections-row.hooks';

const propTypes = {
    category: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        filters: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }))
    })
};

export default function CollectionsRow({ category }) {
    const { filters, activeFilterId, activateFilter } = useCategoryFilters(category.filters);

    return (
        <div className="columns is-multiline px-3">
            <div className="column is-full">
                <CollectionsRowHeader
                    name={category.name}
                    filters={filters}
                    handleFilterClick={activateFilter}
                />
            </div>
            <div className="column">
                <CollectionsRowItemList
                    categoryId={category.id}
                    filterId={activeFilterId}
                />
            </div>
        </div>
    );
};

CollectionsRow.propTypes = propTypes;