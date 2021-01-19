import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom';

import { HashRouter as Router, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Chapters from './book/Chapters';
import Article from './book/Article';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <div className="container-fluid">
                        <Switch>
                            <Route exact path="/" component={Chapters} />
                            <Route exact path="/article" component={Article} />
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
