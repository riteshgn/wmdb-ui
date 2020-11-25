import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BImage } from '@components/bulma';
import { MediaInfoCardContent } from './card-content';

import { useMediaInfo } from './media-info.hooks';

const propTypes = {
    mediaInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.shape({
            backdrop: PropTypes.string,
            poster: PropTypes.string
        }),
        synopsis: PropTypes.shape({
            tagline: PropTypes.string,
            overview: PropTypes.string.isRequired
        }),
        rating: PropTypes.shape({
            score: PropTypes.number,
            count: PropTypes.number
        }).isRequired,
        genres: PropTypes.arrayOf(PropTypes.string),
        releaseDate: PropTypes.string.isRequired,
        runtime: PropTypes.number
    })
};

export function PureMediaInfo({ mediaInfo }) {

    const Content = (mediaInfo && mediaInfo.name)
        ? (
            <div className="columns">
                {Boolean(mediaInfo.imageUrl) &&
                <div className="column is-half">
                    <div className="card-image">
                        <BImage
                            source={mediaInfo.imageUrl.poster || mediaInfo.imageUrl.backdrop}
                            altText={`for ${mediaInfo.name}`}
                            dimension='3by4' />
                    </div>
                </div>}
                <div className="column is-half">
                    <MediaInfoCardContent mediaInfo={mediaInfo} />
                </div>
            </div>
        )
        : <p> No information found </p>;

    return (
        <div className="mediaInfo">
            <article>
                {Content}
            </article>
            <footer className="mt-2">
                <Link to="/">Back to Home</Link>
            </footer>
        </div>
    );

};

export default function MediaInfo({ content }) {

    const mediaInfo = useMediaInfo(content);
    return <PureMediaInfo mediaInfo={mediaInfo}/>;

};

MediaInfo.propTypes = {
    content: PropTypes.shape({
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
};

MediaInfo.propTypes = propTypes;