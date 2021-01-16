import axios from 'axios';

import { GET_CHAPTERS } from './types';

// GET LEADS
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