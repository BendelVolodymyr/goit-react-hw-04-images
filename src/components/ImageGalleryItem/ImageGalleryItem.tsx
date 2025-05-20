import { ImageGalleryItemProps } from 'type/ImageGalleryItem';
import style from './ImageGalleryItem.module.scss';

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  src,
  alt,
  onClick,
  modal,
}) => {
  return (
    <li className={style.gallery__item}>
      <img
        className={style.gallery__image}
        src={src}
        alt={alt}
        onClick={onClick}
        data-href={modal}
      />
    </li>
  );
};

export default ImageGalleryItem;
