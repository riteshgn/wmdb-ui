import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { PureMediaInfo } from './media-info';
import { WithAllInformation } from './card-content/card-content.stories';

const story = {
    component: PureMediaInfo,
    title: 'Components/MediaInfo',
    decorators: [Story => <MemoryRouter><Story /></MemoryRouter>]
};
export default story;

const Template = args => <PureMediaInfo {...args} />

export const Default = Template.bind({});
Default.args = {
    mediaInfo: {
        ...WithAllInformation.args.mediaInfo,
        imageUrl: {
            poster: 'http://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
        }
    }
};

export const NoPoster = Template.bind({});
NoPoster.args = {
    mediaInfo: WithAllInformation.args.mediaInfo
};

export const NoInfo = Template.bind({});
NoInfo.args = {};