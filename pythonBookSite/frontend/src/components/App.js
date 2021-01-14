import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/chapters/")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <ul className="chapters">
                {this.state.data.map(chapter => {
                    return (
                        <li key={chapter.id}>
                            <h1>{chapter.name}</h1>
                            <ul className="sections">
                                {chapter.child_sections.map(section => {
                                    return (
                                        <li key={section.serial_number}>
                                            <h2>{section.serial_number} {section.name}</h2>

                                            <ul className="articles">
                                                {section.child_articles.map(article => {
                                                    return (
                                                        <li key={article.serial_number}>
                                                            <h3>{article.serial_number} {article.name}</h3>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);