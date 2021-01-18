import { combineReducers } from 'redux';
import chapters from './chapters';
import article from './article';

export default combineReducers({
    chapters,
    article
});
