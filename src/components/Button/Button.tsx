import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className={styles['load-more__button']}
      onClick={onClick}
    >
      <span className={styles['load-more__text']}>Load more</span>
    </button>
  );
};

export default Button;
