import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { action } from '@storybook/addon-actions';

import { PureMovieFinder } from './movie-finder';

const story = {
    component: PureMovieFinder,
    title: 'Components/Showcase/MovieFinder',
    decorators: [Story => <MemoryRouter><Story /></MemoryRouter>]
};
export default story;

const Template = args => <PureMovieFinder {...args} />;
const setSearchString = action('setSearchString');

export const Default = Template.bind({});
Default.args = {
    setSearchString
}

export const WithSearchResults = Template.bind({});
WithSearchResults.args = {
    searchString: 'Avengers',
    searchResults: [
        { id: 1, type: 'movie', name: 'Avengers' },
        { id: 2, type: 'movie', name: 'Avengers: Age of Ultron' },
        { id: 3, type: 'movie', name: 'Avengers: Infinity War' },
        { id: 4, type: 'movie', name: 'Avengers: Endgame' }
    ],
    setSearchString
};

export const NoSearchResults = Template.bind({});
NoSearchResults.args = {
    searchString: 'Avengers',
    setSearchString
};