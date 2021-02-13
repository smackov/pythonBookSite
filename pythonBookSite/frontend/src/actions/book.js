import axios from 'axios';

import { GET_CHAPTERS, GET_ARTICLE, GET_ERRORS } from './types';
import { returnErrors } from './messages';

// GET CHAPTERS
export const getChapters = () => dispatch => {
    axios
        .get('/api/chapters/')
        .then(res => {
            dispatch({
                type: GET_CHAPTERS,
                payload: res.data
            });
        })
        .catch((err) => dispatch(returnErrors(
            err.response.data, err.response.status
        )));
};

// GET ARTICLE
export const getArticle = (id) => dispatch => {
    axios
        .get(`/api/article/${id}/`)
        .then(res => {
            dispatch({
                type: GET_ARTICLE,
                payload: res.data
            });
        })
        .catch((err) => dispatch(returnErrors(
            err.response.data, err.response.status
        )));
};