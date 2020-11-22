import React from 'react';
import PropTypes from 'prop-types';

import { CollectionsRowItem } from '../row-item';

import { useContentByCategory } from './row-item-list.hooks';

const propTypes = {
    categoryId: PropTypes.string.isRequired,
    filterId: PropTypes.string
};

export default function CollectionsRowItemList({ categoryId, filterId }) {

    const contentList = useContentByCategory(categoryId, filterId);

    // TODO: display some default content if content list is empty!

    return (
        <div className="columns is-multiline">
            {contentList.map(data => (
                <div key={data.id} className="column is-3">
                    <CollectionsRowItem {...data} />
                </div>
            ))}
        </div>
    );

};

CollectionsRowItemList.propTypes = propTypes;