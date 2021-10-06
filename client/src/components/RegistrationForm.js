import { registerUser } from '../api/user';

const RegistrationForm = ({ form, handleChangeForm }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(form).then((res) => {
          localStorage.setItem('user', JSON.stringify(res.userId));
          localStorage.setItem('token', res.token)
        })
    }

    return (
        <div>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                <input type="text" name="email" value={form.email} onChange={handleChangeForm} />
                </label>
                <label>
                    Имя:
                <input type="text" name="name" value={form.name} onChange={handleChangeForm} />
                </label>
                <label>
                    Пароль:
                <input type="text" name="password" value={form.password} onChange={handleChangeForm} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        </div>
    )
}

export default RegistrationForm;