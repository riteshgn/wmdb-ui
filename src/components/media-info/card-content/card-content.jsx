import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    mediaInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
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

/**
 * TODO: Super basic layout. For future enhancement!!
 *
 */

export default function MediaInfoCardContent({ mediaInfo }) {

    return (
        <div className="content">
            <p className="title">{mediaInfo.name}</p>
            <p className="subtitle">{Boolean(mediaInfo.synopsis) && mediaInfo.synopsis.tagline}</p>
            <p>User rating: {Boolean(mediaInfo.rating) && mediaInfo.rating.score} ({Boolean(mediaInfo.rating) && mediaInfo.rating.count})</p>
            <hr style={{ backgroundColor: '#7f5af0'}}/>
            <p>{Boolean(mediaInfo.genres) && mediaInfo.genres.join(', ')}</p>
            {Boolean(mediaInfo.releaseDate) && <p>Release Date: {mediaInfo.releaseDate}</p>}
            {Boolean(mediaInfo.runtime) && <p>Runtime: {mediaInfo.runtime} mins </p>}
            <hr style={{ backgroundColor: '#7f5af0' }}/>
            <p className="subtitle">Synopsis</p>
            <p>{Boolean(mediaInfo.synopsis) && mediaInfo.synopsis.overview}</p>
        </div>
    );

};

MediaInfoCardContent.propTypes = propTypes;