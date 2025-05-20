export type Images = {
  id: number | string;
  webformatURL: string;
  tags: string;
  largeImageURL: string;
};

export interface ImageGalleryProps {
  images: Images[];
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}
