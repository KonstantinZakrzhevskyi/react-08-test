import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const Loading = () => {
  return (
    <div className={s.loader}>
      <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={3000}
      />
    </div>
  );
};

export default Loading;
