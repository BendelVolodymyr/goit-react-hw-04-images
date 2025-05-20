import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { getImages } from './SearchAPI/SearchAPI';
import SearchBar from './SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import { Images } from 'type/ImageGallery';

export default function App() {
  const [searchName, setSearchName] = useState<string>('');
  const [pages, setPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [images, setImages] = useState<Images[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>('');
  const [modalAlt, setModalAlt] = useState<string>('');

  useEffect(() => {
    const getSearch = async (search: string, page: number) => {
      if (!search) return;
      setIsLoading(true);

      try {
        const { totalHits, hits } = await getImages(search, page);
        if (hits.length === 0) {
          setIsEmpty(true);
        }
        setImages(images => {
          return [...images, ...hits];
        });
        setIsVisible(pages < Math.ceil(totalHits / 12));
      } catch (error) {
        console.log(`Error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    getSearch(searchName, pages);
  }, [pages, searchName]);

  const onHandleFormSubmit = (search: string) => {
    setPages(1);
    setImages([]);
    setIsEmpty(false);
    setSearchName(search);
  };

  const onHandleLoadMore = () => {
    setPages(pages + 1);
  };

  const toggleModal = (
    e?: React.MouseEvent<HTMLImageElement | HTMLDivElement>
  ) => {
    const control = e === undefined;

    if (!control) {
      if (e.target instanceof HTMLImageElement) {
        setModalSrc(e.target.getAttribute('data-href') || '');
        setModalAlt(e.target.alt);
      }
    }
    setShowModal(!showModal);
  };

  return (
    <>
      <SearchBar isLoading={isLoading} onSubmit={onHandleFormSubmit} />
      <ImageGallery images={images} onClick={toggleModal} />
      {isVisible && <Button onClick={onHandleLoadMore} />}
      {showModal && (
        <Modal onClose={toggleModal} src={modalSrc} alt={modalAlt} />
      )}
      {isEmpty && (
        <span className="info">Sorry. There are no images ...😭</span>
      )}
    </>
  );
}
