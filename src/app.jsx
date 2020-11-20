import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from './views/home-page';
import { MediaInfoPage } from './views/media-info-page';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/movie/:mediaId" component={MediaInfoPage} />
                <Route exact path="/tv/:mediaId" component={MediaInfoPage} />
                <Route exact path="/" component={HomePage} />
            </Switch>
        );
    }
}

export default App;