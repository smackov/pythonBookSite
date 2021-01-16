import React from 'react'
import Chapters from './Chapters'


export default function Dashboard() {
    return (
        <div className="row my-4">
            <div className="col-lg-10">
                <Chapters />
            </div>
            <div className="col-lg-2 bg-light">
                <h2>List</h2>
            </div>
        </div>
    )
}