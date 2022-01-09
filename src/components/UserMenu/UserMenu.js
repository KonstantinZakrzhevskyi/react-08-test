import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

import defaultAvatar from './defaultAvatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={s.userMenu}>
      <img src={avatar} alt="avatar" width="32" />
      <span className={s.userMenu__text}>Welcome, {`${name}!`}</span>
      <button
        className={s.userMenu__btn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
}
