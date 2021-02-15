import { combineReducers } from 'redux';
import chapters from './chapters';
import article from './article';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    chapters,
    article,
    errors,
    messages,
    auth
});
