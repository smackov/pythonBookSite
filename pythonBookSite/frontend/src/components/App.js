import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Error from './layout/Error';
import Chapters from './book/Chapters';
import Article from './book/Article';
import Login from './accounts/Login';
import Alerts from './layout/Alerts';

import { loadUser } from '../actions/auth';

import { Provider } from 'react-redux';
import store from '../store';


// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
};

class App extends Component {
    // componentDidMount() {
    //     store.dispatch(loadUser());
    // }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <div className="container-lg">
                                <Alerts />
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
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
