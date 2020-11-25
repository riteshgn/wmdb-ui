import React from 'react';

import BImage from './image';

const story = {
    component: BImage,
    title: 'Components/Bulma/BImage'
};
export default story;

const Template = args => <BImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    source: 'https://image.tmdb.org/t/p/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    altText: 'Endgame',
    dimension: '128'
};

export const Rounded = Template.bind({});
Rounded.args = {
    ...Default.args,
    isRounded: true
};

export const Responsive = Template.bind({});
Responsive.args = {
    ...Default.args,
    dimension: '4by5'
};

export const AltText = Template.bind({});
AltText.args = {
    ...Default.args,
    source: ''
};