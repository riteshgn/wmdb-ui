import React from 'react';
import PropTypes from 'prop-types';

import { CategoryRow } from './category-row';

export default function CategoryRows({ categories }) {

    return Object.keys(categories).map(categoryId => (
        <CategoryRow
            key={categoryId}
            category={{
                id: categoryId,
                name: categories[categoryId]
            }}
        />
    ));

};

CategoryRows.propTypes = {
    categories: PropTypes.object.isRequired
}