import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import { WdbNavbar } from './components/navigation/organisms';
import { WdbHome } from './views/home';

const TV = () => (
    <div className="container">
        <h2>TV</h2>
    </div>
);

const Movies = () => (
    <div className="container">
        <h2>Movies</h2>
    </div>
);

class App extends Component {
    render() {
        return (
            <div id="app">
                <WdbNavbar />

                <section className="section">
                    <Switch>
                        <Route exact path="/" component={WdbHome} />
                        <Route path="/tv" component={TV} />
                        <Route path="/movies" component={Movies} />
                    </Switch>
                </section>
            </div>
        );
    }
}

export default App;