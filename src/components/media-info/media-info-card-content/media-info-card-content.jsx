import React from 'react';

export default function MediaInfoCardContent({ mediaInfo }) {

    return (
        <div className="content">
            <h3>{mediaInfo.name}</h3>
        </div>
    );

};