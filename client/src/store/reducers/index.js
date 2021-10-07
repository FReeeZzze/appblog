import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import mainReducer from './mainReducer';

const appReducer = combineReducers({
  posts: postsReducer,
  main: mainReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
