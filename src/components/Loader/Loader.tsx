import { LoaderProps } from 'type/Loader';
import style from './Loader.module.scss';

const { RotatingLines } = require('react-loader-spinner');

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div className={style.loader__box}>
      <RotatingLines
        strokeWidth="5"
        animationDuration="0.75"
        width="30"
        strokeColor="#fff176"
        visible={isLoading}
      />
    </div>
  );
};

export default Loader;
