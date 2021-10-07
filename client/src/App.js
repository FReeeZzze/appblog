import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import useRoutes from 'routes';
import store from 'store';
import { AuthContext } from 'context/AuthContext';
import useAuth from 'hooks/auth.hook';

const App = () => {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  
  return (
    <Provider store={store}>
      <AuthContext.Provider
        value={{ token, login, logout, userId, isAuthenticated }}
      >
        <Router>
          {routes}
        </Router>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
