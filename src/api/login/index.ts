import request from "@/utils/request";

import type{ UserDataResponse,PlaylistResponse } from './type'

enum API{
    LOGIN_URL = '/user/detail',
    USER_PLAYLIST_URL = '/user/playlist'
}

export const reqLogin = (uid:number) => request.get<any,UserDataResponse>(API.LOGIN_URL+`?uid=${uid}`);

export const reqUserPlaylistDetail = (uid:number) => request.get<any,PlaylistResponse>(API.USER_PLAYLIST_URL+`?uid=${uid}`);