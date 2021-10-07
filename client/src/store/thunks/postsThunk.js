import { actions } from '../reducers/postsReducer';
import { getCookie } from 'utils/cookiesUtils';
import { authKey } from 'constants/cookies';
import { Posts, User } from 'api';

export const createPostThunk = (data) => async dispatch => {
  try {
    const token = getCookie(authKey);
    const post = await Posts.create(data, token);
    console.log('Пост создан: ', post);
  } catch(e) {
    console.log(e.message)
  }
}

export const fetchPosts = (page='') => async dispatch => {
  try {
    const { result, pagination } = await Posts.getPostsByPage(page)
    dispatch(actions.setPosts(result))
    dispatch(actions.setPagination(pagination))
  } catch(e) {
    console.log(e.message)
  }
}

export const fetchAuthorByPost = (message, author) => async dispatch => {
  try {
    const { result } = await User.getUserById(author)
    dispatch(actions.setAuthorPost({ message, author: result}))
  } catch(e) {
    console.log(e.message)
  }
}