import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-auto bg-dark p-2 mb-0">
                <div className="container text-center my-0">
                    <p className="text-decoration-none my-0">
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