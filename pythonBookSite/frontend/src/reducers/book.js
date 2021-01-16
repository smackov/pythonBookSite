import { GET_CHAPTERS } from '../actions/types.js';

const initialState = {
    chapters: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHAPTERS:
            return {
                ...state,
                chapters: action.payload
            };
        default:
            return state;
    }
}