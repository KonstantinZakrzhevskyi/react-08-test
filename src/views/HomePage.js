import React from 'react';
import phonebook from '../views/Phonebook.jpg';

import s from './views.module.css';

const HomePage = () => (
  <div>
    <h1 className={s.homePage__title}>My Phonebook</h1>
    <img className={s.homePage__img} src={phonebook} alt="" />
  </div>
);

export default HomePage;
