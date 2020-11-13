import React from 'react';
import PropTypes from 'prop-types';

import { CategoryRowItem } from '../category-row-item';

import { useCategorySearch } from './category-row-item-list.hooks';

export default function CategoryContent({ categoryId }) {

    const content = useCategorySearch(categoryId);

    return (
        <div className="columns">
            {content.map(data => (
                <div key={data.id} className="column is-3">
                    <CategoryRowItem {...data} />
                </div>
            ))}
        </div>
    );

};

CategoryContent.propTypes = {
    categoryId: PropTypes.string.isRequired
};