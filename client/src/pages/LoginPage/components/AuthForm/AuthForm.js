import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import { User } from 'api';
import { getMeProfile } from 'store/thunks/mainThunk';
import { useDispatch } from 'react-redux';

const AuthForm = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });
  const auth = React.useContext(AuthContext);
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const loginHandler = async () => {
      const { token, userId } = await User.loginUser(form)
      auth.login(token, userId);
      dispatch(getMeProfile(token))
    } 
    loginHandler();
  }

  const handleChangeForm = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      
      setForm((prev) => {
          return {...prev, [name]: value }
      })
  }

  return (
    <div className="container mb-5">
        <h1>Авторизация</h1>
        <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">Email:</label>
                <input 
                    id="loginEmail" 
                    type="text" 
                    name="email" 
                    value={form.email} 
                    onChange={handleChangeForm} 
                    className="form-control" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">Password:</label>
                <input 
                    id="loginPassword" 
                    type="text" 
                    name="password" 
                    value={form.password} 
                    onChange={handleChangeForm} 
                    className="form-control" 
                />
            </div>
            <button type="submit" className="btn btn-primary">Войти</button>
        </form>
        <NavLink to="/register">У вас нет аккаунта? Зарегистрируйтесь</NavLink>
    </div>
  )
};

export default AuthForm;
