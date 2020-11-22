import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { BImage } from '@components/bulma/image';

const propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.shape({
        backdrop: PropTypes.string,
        poster: PropTypes.string
    })
};

export default function CollectionsRowItem({ id, type, name, imageUrl }) {

    const [renderRedirect, setRenderRedirect] = useState(false);

    if (renderRedirect) {
        return <Redirect to={`/${type}/${id}`} />
    }

    return (
        <div
            className="card"
            style={{ cursor: 'pointer' }}
            onClick={() => setRenderRedirect(true)}
        >
            <div className="card-image">
                <BImage
                    source={imageUrl.backdrop || imageUrl.poster}
                    altText={`for ${name}`}
                    dimension='16by9' />
            </div>

            <div className="card-content p-3">
                <div className="content">
                    <p> {name} </p>
                </div>
            </div>
        </div>
    );

};

CollectionsRowItem.propTypes = propTypes;