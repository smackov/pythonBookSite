import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary" aria-label="Eighth navbar example">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/static/frontend/img/Real_python.svg" height="40" className="img" alt="Real Python"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                <ul className="dropdown-menu" aria-labelledby="">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form>
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header