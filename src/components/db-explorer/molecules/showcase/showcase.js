import React, { Component } from 'react';
import styles from './showcase.module.scss';

class Showcase extends Component {

    render() {
        const backdropImage = {
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 255, 0.1) 0%, rgba(0, 255, 0, 0.1) 100%), url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ijMGlJKqcslswWUzTEwScm82Gs.jpg')`
        };

        return (
            <section
                className={`hero is-light is-bold is-medium has-backdrop-image ${styles.hasBackdropImage}`}
                style={backdropImage}>

                <div className="hero-body">
                    <h1 className="title has-text-light">The Wow Movie Database</h1>
                    <input className="input" type="text" placeholder="Search for Movies or TV shows..." />
                </div>

            </section>
        );

    }

}

export default Showcase;