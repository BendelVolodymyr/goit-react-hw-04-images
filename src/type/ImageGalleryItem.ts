export type ImageGalleryItemProps = {
  src: string;
  alt: string;
  modal: string;
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
};
