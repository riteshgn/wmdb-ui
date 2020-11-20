import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

import { Layout } from '../layout';
import { MediaInfo } from '@components/media-info';

export default function MediaInfoPage() {

    const match = useRouteMatch();
    const { mediaId } = useParams();

    const content = {
        type: match.url.split('/')[1],
        id: mediaId
    };

    return (
        <Layout>
            <MediaInfo content={content} />
        </Layout>
    );

};