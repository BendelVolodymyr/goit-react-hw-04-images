export interface PixabayImage {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export interface PixabayResponse {
  totalHits: number;
  hits: PixabayImage[];
}
