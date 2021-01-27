import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";

import { getArticle } from '../../actions/book';

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import headings from 'remark-autolink-headings';
import slug from 'remark-slug'

import { renderToString } from 'react-dom/server';

// import '../../../static/frontend/css/github-highlight.css';
import hljs from "highlight.js";


export class Article extends Component {
    static propTypes = {
        article: PropTypes.array.isRequired
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getArticle(id);
        this.updateCodeSyntaxHighlighting();
    }

    componentDidUpdate() {
        this.updateCodeSyntaxHighlighting();
    }

    updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre code").forEach(block => {
            hljs.highlightBlock(block);
        });
    };

    aToLinks = () => {
        document.querySelectorAll('a').forEach(a => {
            let to = a.getAttribute('href');
            let text = a.innerText;
            const link = renderToString(<Link to={to}>{text}</Link>);
            a.replaceWith(link);
        })
    };

    render() {

        function flatten(text, child) {
            return typeof child === 'string'
                ? text + child
                : React.Children.toArray(child.props.children).reduce(flatten, text)
        }

        function HeadingRenderer(props) {
            var children = React.Children.toArray(props.children)
            var text = children.reduce(flatten, '')
            var slug = text.toLowerCase().replace(/[^A-Za-z0-9_а-яА-ЯёЁ]/g, '-')
            return React.createElement('h' + props.level, { id: slug }, props.children)
        }

        return (
            <Fragment>
                <div className="row my-4">
                    <div className="col-lg-3 border-right">
                        <h3 className="text-15rem">Content:</h3>
                    </div>
                    <div className="col-lg-9 pl-4">
                        <div className="article-content mx-auto">
                            <ReactMarkdown
                                plugins={[gfm, slug, [headings, { behavior: 'wrap' }]]}
                                renderers={{ heading: HeadingRenderer }}
                                children={this.props.article.text} />
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

export default withRouter(connect(
    mapStateToProps,
    { getArticle }
)(Article));

