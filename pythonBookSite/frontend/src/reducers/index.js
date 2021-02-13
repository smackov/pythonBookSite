import { combineReducers } from 'redux';
import chapters from './chapters';
import article from './article';
import errors from './errors';

export default combineReducers({
    chapters,
    article,
    errors
});
