import React, { Component } from 'react';

import { WdbMediaTile } from '@components/db-explorer/molecules';

class Explorer extends Component {

    render() {

        const MediaColumns = this.props.category.media.map(media => (
                <div key={media.id} className="column is-3">
                    <WdbMediaTile
                        name={media.name}
                        image_url={media.image_url} />
                </div>
            ));

        return (
            <div className="columns is-multiline px-3">
                <div className="column is-full">
                    <p className="subtitle">
                        {this.props.category.name}
                    </p>
                </div>
                <div className="column">
                    <div className="columns">
                        {MediaColumns}
                    </div>
                </div>
            </div>
        );

    }

}

export default Explorer;