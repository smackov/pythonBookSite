import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getChapters } from '../../actions/book';


export class Chapters extends Component {
    static propTypes = {
        chapters: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getChapters();
    }

    render() {
        return (
            <Fragment>
                <div className="chapter-list">
                {this.props.chapters.map(chapter => {
                    return (
                        <div className="chapter-item border-bottom mb-4">
                            <span class="badge badge-primary">Часть {chapter.serial_number}</span>
                            <h1 className="text-20rem my-2">{chapter.name}</h1>
                            <div className="section-list my-4 px-2">
                                {chapter.child_sections.map(section => {
                                    return (
                                        <div className="section-item my-2">
                                            <h2 className="text-15rem">{section.name}</h2>
                                            <ul className="article-list mx-0 px-0">
                                                {section.child_articles.map(article => {
                                                    return (
                                                        <li className="article-item list-unstyled">
                                                            {article.serial_number} &nbsp;
                                                            <a href="#">{article.name}</a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    chapters: state.chapters.chapters
});

export default connect(
    mapStateToProps,
    { getChapters }
)(Chapters);

