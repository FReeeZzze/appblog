import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PostsPage, LoginPage, RegisterPage } from './pages';

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <PostsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  
  return (
    <Switch>
      <Route path="/" exact>
        <PostsPage />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default useRoutes;
