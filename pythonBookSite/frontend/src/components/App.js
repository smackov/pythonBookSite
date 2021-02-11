import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useRouteMatch
}
    from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Error from './layout/Error';
import Chapters from './book/Chapters';
import Article from './book/Article';
import Login from './accounts/Login';

import { loadUser } from '../actions/auth';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <div className="container-lg">
                            <Switch>
                                <Route exact path="/" component={Chapters} />
                                <Route exact path="/article/:id" component={Article} />
                                <Route exact path="/login" component={Login} />
                                <Route component={Error} />
                            </Switch>
                        </div>
                        <Footer />
                    </Fragment>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
