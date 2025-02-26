import request from '@/utils/request';
import type{TopListResponseData,PersonalizedResponseData} from './type'

enum API{
    PERSONALIZED_URL = '/personalized',
    TOP_LIST_URL = '/top/detail'
}
export const reqPersonalized = () => request.get<any,PersonalizedResponseData>(API.PERSONALIZED_URL);

export const reqTopList = (id: number) => request.get<any,TopListResponseData>(API.TOP_LIST_URL+`?id=${id}`);