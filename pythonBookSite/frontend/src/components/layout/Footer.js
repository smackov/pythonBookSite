import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-auto bg-dark p-1 pt-2 mb-0">
                <div className="container text-center">
                    <p className="text-decoration-none">
                        This web application was created by
                        <a className="text-reset pl-2" href="https://github.com/smackov">
                            <span className="badge badge-light">Smackov</span>
                        </a>
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer