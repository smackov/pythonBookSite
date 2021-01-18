import { GET_ARTICLE } from '../actions/types.js';

const initialState = {
    article: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLE:
            return {
                ...state,
                article: action.payload
            };
        default:
            return state;
    }
}