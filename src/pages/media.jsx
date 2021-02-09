import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { MediaInfo } from '../components/media-info';

const MediaPage = () => {
    const match = useRouteMatch();
    const { mediaId } = useParams();

    return (
        <Layout>
            <SEO title="Media Information" />
            <MediaInfo
                id={mediaId}
                mediaType={match.url.split('/')[2]}
            />
        </Layout>
    )
};

export default MediaPage;