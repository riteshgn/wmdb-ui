import React from 'react';

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
            <p><strong>Synopsis</strong></p>
            <p>{Boolean(mediaInfo.synopsis) && mediaInfo.synopsis.overview}</p>
        </div>
    );

};