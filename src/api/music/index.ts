import request from "@/utils/request";
import type{AudioData,AudioResponse} from './type'

enum API{
    MUSIC_URL = '/song/url'
}

export const reqMusic = (id: number) => request.get<any,AudioResponse>(API.MUSIC_URL+`?id=${id}`);