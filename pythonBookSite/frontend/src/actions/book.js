import axios from 'axios';

import { GET_CHAPTERS, GET_ARTICLE, GET_ERRORS } from './types';
import { returnErrors } from './messages';
import { tokenConfig } from './auth';

// GET CHAPTERS
export const getChapters = () => (dispatch, getState) => {
    axios
        .get('/api/chapters/', tokenConfig(getState))
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
export const getArticle = (id) => (dispatch, getState) => {
    axios
        .get(`/api/article/${id}/`, tokenConfig(getState))
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