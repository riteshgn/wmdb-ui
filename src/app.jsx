import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import IndexPage from './pages/index';
import MediaPage from './pages/media';
import NotFoundPage from './pages/404';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/media/movie/:mediaId" component={MediaPage} />
                <Route exact path="/tv/:mediaId" component={MediaPage} />
                <Route exact path="/" component={IndexPage} />
                <Route component={NotFoundPage} />
            </Switch>
        );
    }
}

export default App;