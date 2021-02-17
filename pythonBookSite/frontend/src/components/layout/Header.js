import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav mx-2">
                <li>
                    <span className="navbar-text mx-2">
                        <strong>
                            {user ? `Welcome ${user.username}` : ''}
                        </strong>
                    </span>
                </li>
                <li className="nav-item">
                    <button onClick={this.props.logout} className="btn btn-secondary mx-2">
                        Logout
                    </button>
                </li>
            </ul>

        );

        const guestLinks = (
            <ul className="navbar-nav mx-2">
                <li className="nav-item">
                    <Link to="/register" className="btn btn-secondary mx-2">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="btn btn-danger mx-2">Login</Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-0">
                <div className="container-lg">
                    <Link to="/" className="navbar-brand">
                        <img src="/static/frontend/img/Python-book.png" height="50" className="img" alt="Real Python"></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto ml-3">
                            <li className="nav-item">
                                <Link to="/" className="nav-link-white">Book</Link>
                            </li>
                        </ul>

                        {isAuthenticated ? authLinks : guestLinks}

                        <form className="form-inline my-2 my-md-0">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                        </form>
                        <ul className="navbar-nav mx-2">
                            <li className="nav-item">
                                <a href="https://github.com/smackov/python-book" className="btn btn-info mx-2">GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
