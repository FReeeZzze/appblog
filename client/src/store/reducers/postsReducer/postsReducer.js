const types = {
  SET_POSTS: 'posts/SET_POSTS',
  SET_PAGINATION: 'posts/SET_PAGINATION',
  SET_AUTHOR_POST: 'posts/SET_AUTHOR_POST'
};

const init = {
  posts: [],
  authorsPosts: {},
  pagination: {}
};

export default function postsReducer(state = init, action) {
  const { type, payload } = action;
  if (type === types.SET_POSTS) {
    return { ...state, posts: payload };
  }
  if (type === types.SET_PAGINATION) {
    return {...state, pagination: payload };
  }
  if (type === types.SET_AUTHOR_POST) {
    return {...state, authorsPosts: {...state.authorsPosts, [payload.message]: payload.author }};
  }
  return state;
}

export const actions = {
  setPosts: (posts) => ({
    type: types.SET_POSTS,
    payload: posts,
  }),
  setPagination: (pagination) => ({
    type: types.SET_PAGINATION,
    payload: pagination
  }),
  setAuthorPost: (payload) => ({
    type: types.SET_AUTHOR_POST,
    payload,
  })
};
