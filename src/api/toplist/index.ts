import request from '@/utils/request';
import type{TopListResponseData,PersonalizedResponseData,SongDetailResponseData,PlaylistResponseData} from './type'

enum API{
    PERSONALIZED_URL = '/personalized',
    TOP_LIST_URL = '/toplist/detail',
    SONG_DETAIL_URL = '/song/detail',
    PLAYLIST_DETAIL_URL = '/playlist/detail'
}
export const reqPersonalized = () => request.get<any,PersonalizedResponseData>(API.PERSONALIZED_URL);
export const reqTopList = () => request.get<any,TopListResponseData>(API.TOP_LIST_URL);
export const reqSongDetail = (ids: string) => request.get<any,SongDetailResponseData>(API.SONG_DETAIL_URL+`?ids=${ids}`);
export const reqPlaylistDetail = (id: number) => request.get<any,PlaylistResponseData>(API.PLAYLIST_DETAIL_URL+`?id=${id}`);