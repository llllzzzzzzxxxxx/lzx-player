import request from "@/utils/request";
import type{AudioResponse,SongDetailResponse,LrcResponse,CommentResponse} from './type'

enum API{
    MUSIC_URL = '/song/url',
    MUSIC_DETAIL_URL = '/song/detail',
    MUSIC_LYRIC_URL = '/lyric/new',
    MUSIC_COMMENT_URL = '/comment/music'
}

export const reqMusic = (id: number) => request.get<any,AudioResponse>(API.MUSIC_URL+`?id=${id}`);
export const reqMusicDetail = (ids: number) => request.get<any,SongDetailResponse>(API.MUSIC_DETAIL_URL+`?ids=${ids}`);
export const reqMusicLyric = (id: number) => request.get<any,LrcResponse>(API.MUSIC_LYRIC_URL+`?id=${id}`);
export const reqMusicComment = (offset: number,limit: number,id: number) => request.get<any,CommentResponse>(API.MUSIC_COMMENT_URL+`?offset=${offset}&limit=${limit}&id=${id}`);