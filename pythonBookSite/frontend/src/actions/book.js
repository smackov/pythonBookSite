import axios from 'axios';

import { GET_CHAPTERS, GET_ARTICLE, GET_ERRORS } from './types';

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
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch ({
                type: GET_ERRORS,
                payload: errors
            });
        });
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
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch ({
                type: GET_ERRORS,
                payload: errors
            });
        });
};