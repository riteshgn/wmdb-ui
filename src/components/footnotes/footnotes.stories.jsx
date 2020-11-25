import React from 'react';

import Footnotes from './footnotes';

const story = {
    component: Footnotes,
    title: 'Components/Footnotes',
    decorators: [Story => <div style={{backgroundColor: 'black', padding: '2em'}}><Story /></div>]
};
export default story;

const Template = args => <Footnotes {...args} />;

export const Default = Template.bind({});