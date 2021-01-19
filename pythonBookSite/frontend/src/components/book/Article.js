import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getArticle } from '../../actions/book';

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

// import '../../../static/frontend/css/github-highlight.css';
import hljs from "highlight.js";


export class Article extends Component {
    static propTypes = {
        article: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.updateCodeSyntaxHighlighting();
        this.props.getArticle();
    }

    componentDidUpdate() {
        this.updateCodeSyntaxHighlighting();
    }

    updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre code").forEach(block => {
            hljs.highlightBlock(block);
        });
    };

    render() {
        return (
            <Fragment>
                <div className="row my-4">
                    <div className="col-lg-3 border-right">
                        <h3 className="text-15rem">Content:</h3>
                    </div>
                    <div className="col-lg-8">
                        <div className="article-content mx-auto">
                            <ReactMarkdown plugins={[gfm]} children={this.props.article.text} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    article: state.article.article
});

export default connect(
    mapStateToProps,
    { getArticle }
)(Article);

