import request from '@/utils/request';
import type { SearchResponseData,HotSearchResponseData } from './type';
enum API {
    SEARCH_URL = '/search',
    SEARCH_HOT_URL = '/search/hot'
}
export const reqSearch = (keywords: string ,limit: number,offset: number) => request.get<any,SearchResponseData>(API.SEARCH_URL+`?keywords=${keywords}&limit=${limit}&offset=${offset}`);
export const reqSearchHot = () => request.get<any,HotSearchResponseData>(API.SEARCH_HOT_URL);