import React, {Component} from 'react';

import { WdbShowcase } from '@components/db-explorer/molecules';
import { WdbExplorer } from '@components/db-explorer/organisms';

const ExploreCategories = [
    {
        id: 'cat-trending',
        name: 'Trending',
        media: [
            {
                id: 1,
                name: 'Avengers: Endgame',
                image_url: 'https://image.tmdb.org/t/p/w500/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg',
            },
            {
                id: 2,
                name: 'Jo Jo Rabbit',
                image_url: 'https://image.tmdb.org/t/p/w500/lTyikzfGgRX5ZqIfVeT26APYfRL.jpg'
            }
        ]
    },
    {
        id: 'cat-prev-view',
        name: 'Previously Viewed',
        media: [
            {
                id: 1,
                name: 'The Crown',
                image_url: 'https://image.tmdb.org/t/p/w500/4InrdamBEM31unNiuEHGYTPX1e2.jpg',
            }
        ]
    }
];


class Home extends Component {

    render() {

        const explorers = ExploreCategories.map(category => <WdbExplorer key={category.id} category={category} />);

        return (
            <div id="app-home">

                <WdbShowcase />
                {explorers}

            </div>
        );

    }

}

export default Home;