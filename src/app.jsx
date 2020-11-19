import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from './views/home-page';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        );
    }
}

export default App;