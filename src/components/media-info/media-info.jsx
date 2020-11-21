import React from 'react';
import PropTypes from 'prop-types';

import { BImage } from '@components/bulma';
import { MediaInfoCardContent } from './media-info-card-content';

import { useMediaInfo } from './media-info.hooks';
import { Link } from 'react-router-dom';

const propTypes = {
    content: PropTypes.shape({
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
};

export default function MediaInfo({ content }) {

    const mediaInfo = useMediaInfo(content);

    return (
        <div className="mediaInfo">
            <article>
                <div className="columns">
                    <div className="column is-half">
                        {Boolean(mediaInfo.imageUrl) &&
                            <div className="card-image">
                                <BImage
                                    source={mediaInfo.imageUrl.poster || mediaInfo.imageUrl.backdrop}
                                    altText={`for ${mediaInfo.name}`}
                                    dimension='3by4' />
                            </div>}
                    </div>
                    <div className="column is-half">
                        <MediaInfoCardContent mediaInfo={mediaInfo} />
                    </div>
                </div>
            </article>
            <footer className="mt-2">
                <Link to="/">Back to Home</Link>
            </footer>
        </div>
    );

};

MediaInfo.propTypes = propTypes;