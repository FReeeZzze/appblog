import React from 'react';
import PostItem from './components/PostItem';
import Pagination from './components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from 'store/thunks/postsThunk';
import { AuthContext } from 'context/AuthContext';
import { NavLink } from 'react-router-dom';

const PostsContainer = () => {
    const { posts, pagination } = useSelector((state) => state.posts);
    const auth = React.useContext(AuthContext);
    const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div className="container mb-5">
            {!auth.isAuthenticated && 
              <div className="mb-3 mt-3">
                <NavLink to="/register">Регистрация</NavLink>
                {` / `}
                <NavLink to="/login">Войти</NavLink>
              </div>}
            <h3 className="mb-3">Посты</h3>
            {posts.map((post) => <PostItem key={`key:${post._id}`} post={post} />)}
            <Pagination pagination={pagination} />
        </div>
    )
}

export default PostsContainer;