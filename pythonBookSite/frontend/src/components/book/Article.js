import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getArticle } from '../../actions/book';


export class Article extends Component {
    static propTypes = {
        article: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getArticle();
    }

    render() {
        const content  = this.props.article.text;
        return (
            <Fragment>
                <div className="row my-4">
                    <div className="col-lg-10">
                    <div className="article-content" dangerouslySetInnerHTML={{__html: content}}></div>
                    </div>
                    <div className="col-lg-2 border-left">
                        <h3 className="text-15rem">Content:</h3>
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

