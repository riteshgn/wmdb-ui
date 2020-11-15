import React from 'react';
import PropTypes from 'prop-types';

import { BImage } from '@components/bulma/image';

const propTypes = {
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired
};

export default function CollectionsRowItem({ name, image_url }) {

    return (
        <div className="card">
            <div className="card-image">
                <BImage
                    source={image_url}
                    altText={`for ${name}`}
                    dimension='16by9' />
            </div>

            <footer className="card-footer">
                <div className="card-footer-item">
                    <p className="subtitle"> {name} </p>
                </div>
            </footer>
        </div>
    );

};

CollectionsRowItem.propTypes = propTypes;