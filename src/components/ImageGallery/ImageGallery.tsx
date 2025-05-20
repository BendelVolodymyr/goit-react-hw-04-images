import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryProps } from 'type/ImageGallery';
import style from './ImageGallery.module.scss';

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  if (images.length === 0) return null;
  return (
    <section className={style.gallery}>
      <ul className={style.gallery__list}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            modal={largeImageURL}
            onClick={onClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default ImageGallery;
