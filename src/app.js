import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import { Navbar } from './components/navigation/navbar';
import { Home } from './views/home';

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
                <Navbar />

                <section className="section">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/tv" component={TV} />
                        <Route path="/movies" component={Movies} />
                    </Switch>
                </section>
            </div>
        );
    }
}

export default App;