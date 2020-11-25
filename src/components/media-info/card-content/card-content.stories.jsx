import React from 'react';

import MediaInfoCardContent from './card-content';

const story = {
    component: MediaInfoCardContent,
    title: 'Components/MediaInfo/CardContent'
};
export default story;

const Template = args => <MediaInfoCardContent {...args} />;

export const Default = Template.bind({});
Default.args = {
    mediaInfo: {
        name: 'Avengers Endgame',
        synopsis: {
            overview: 'lorem ipsum'
        },
        rating: {
            score: 7.8,
            count: 10
        },
        releaseDate: '26-May-2019'
    }
};

export const WithAllInformation = Template.bind({});
WithAllInformation.args = {
    mediaInfo: {
        ...Default.args.mediaInfo,
        synopsis: {
            tagline: 'Whatever it takes',
            overview: 'lorem ipsum'
        },
        genres: ['Sci-fi', 'Action', 'Drama'],
        runtime: 180
    }
};