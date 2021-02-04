import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-0">
                <div className="container-lg">
                    <a className="navbar-brand">
                        <Link to="/">
                        <img src="/static/frontend/img/Python-book.png" height="50" className="img" alt="Real Python"></img>
                        </Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto ml-3">
                            <li className="nav-item">
                                <a className="nav-link"><Link to="/">Book</Link></a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-md-0">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header