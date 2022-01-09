import PropTypes from 'prop-types';
import s from './Container.module.css';

export default function Container({ title, children }) {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
