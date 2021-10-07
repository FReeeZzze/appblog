import React, { useState, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { User } from 'api';


const RegisterForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const auth = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    const { token, userId } = User.registerUser(form);
    auth.login(token, userId);
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
        <h1>Регистрация</h1>
        <form onSubmit={handleSubmit} className="container">
            <div className="mb-3">
                <label htmlFor="regEmail" className="form-label">Email:</label>
                <input 
                    id="regEmail" 
                    type="text" 
                    name="email" 
                    value={form.email} 
                    onChange={handleChangeForm} 
                    className="form-control"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="regName" className="form-label">Имя:</label>
                <input 
                    id="regName"
                    type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChangeForm} 
                    className="form-control" 
                    aria-describedby="nameHelp"
                />
                </div>
            <div className="mb-3">
                <label htmlFor="regPassword" className="form-label">Пароль:</label>
                <input
                    id="regPassword" 
                    type="text" 
                    name="password" 
                    value={form.password} 
                    onChange={handleChangeForm} 
                    className="form-control" 
                    aria-describedby="passwordHelp"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Зарегистрироваться
            </button>
        </form>
    </div>
  )
};

export default RegisterForm;
