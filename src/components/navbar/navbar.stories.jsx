import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './navbar';

const story = {
    component: Navbar,
    title: 'Components/Navbar',
    decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
};
export default story;

const Template = args => <Navbar />

export const Default = Template.bind({});