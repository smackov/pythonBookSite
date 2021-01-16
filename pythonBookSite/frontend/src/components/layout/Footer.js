import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer class="footer mt-auto bg-dark p-1 pt-2 mb-0">
                <div class="container text-center">
                    <p class="text-decoration-none">
                        This web application was created by
                        <a class="text-reset pl-2" href="https://github.com/smackov">
                            <span class="badge badge-light">Smackov</span>
                        </a>
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer