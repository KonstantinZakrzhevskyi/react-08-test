import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import s from './views.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.loginPage__title}>Login</h1>

      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.form__label}>
          Email
          <input
            className={s.form__input}
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </label>

        <label className={s.form__label}>
          Password
          <input
            className={s.form__input}
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </label>

        <button className={s.form__btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
