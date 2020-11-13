import React from 'react';
import PropTypes from 'prop-types';

import { CategoryRowHeader } from '../category-row-header';
import { CategoryRowItemList } from '../category-row-item-list';

export default function CategoryRow({ category }) {
    return (
        <div className="columns is-multiline px-3">
            <div className="column is-full">
                <CategoryRowHeader categoryName={category.name} />
            </div>
            <div className="column">
                <CategoryRowItemList categoryId={category.id} />
            </div>
        </div>
    );
}

CategoryRow.propTypes = {
    category: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
};