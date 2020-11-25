import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { PureShowcase } from './showcase';

const story = {
    component: PureShowcase,
    title: 'Components/Showcase',
    decorators: [Story => <MemoryRouter><Story /></MemoryRouter>]
};
export default story;

const Template = args => <PureShowcase {...args} />;

export const Default = Template.bind({});
Default.args = {
    imageUrl: 'http://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg'
};

export const NoBackground = Template.bind({});

export const InvalidBackground = Template.bind({});
InvalidBackground.args = {
    imageUrl: 'invalid_url'
};