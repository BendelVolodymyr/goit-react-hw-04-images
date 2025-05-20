import axios from 'axios';
import { PixabayResponse } from 'type/SearchAPI';

const KEY_API = '40252530-8571e952a05bfbe082a85c49d';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImages(
  searchName: string,
  page: number
): Promise<PixabayResponse> {
  const params = new URLSearchParams({
    key: KEY_API,
    q: searchName,
    page: page.toString(),
    per_page: '12',
  });
  const { data } = await axios.get<PixabayResponse>(`${BASE_URL}?${params}`);
  return data;
}
