import axios from 'axios';

import { GET_CHAPTERS, GET_ARTICLE } from './types';

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
        .catch(err => console.log(err));
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
        .catch(err => console.log(err));
};