import React, { Component } from 'react';

export class Error extends Component {
    render() {
        return (
            <div className="row my-5">
                <div className="col-lg-12 mx-auto">
                    <h1 className="text-center mt-3">
                        404
                    </h1>
                    <h3 className="text-center mt-2">
                        Page not found
                    </h3>
                </div>
            </div>
        )
    }
}

export default Error