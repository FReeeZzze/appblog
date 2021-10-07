import React, { useEffect, useContext } from 'react';
import { getCookie } from 'utils/cookiesUtils';
import { authKey, authUserId } from 'constants/cookies';
import useInterval from 'hooks/interval.hook';
import PostsContainer from 'components/PostsContainer';
import { AuthContext } from 'context/AuthContext';
import CreatePostForm from 'components/CreatePostForm';
import Profile from 'components/Profile';

const PostsPage = () => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    document.title = 'Посты';
  }, []);

  useInterval(() => {
    const token = getCookie(authKey);
    const userId = getCookie(authUserId);
    if (!token && !userId) {
      auth.logout();
    }
  }, 1000);

  return (
    <div>
      {auth.isAuthenticated &&
        <div className="d-flex container mb-3 mt-3">
          <CreatePostForm />
          <Profile />
        </div>
      }
      <PostsContainer />
    </div>
  );
};

export default React.memo(PostsPage);
