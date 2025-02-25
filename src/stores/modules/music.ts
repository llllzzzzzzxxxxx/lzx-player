import { defineStore } from "pinia";
import { reqMusic } from "@/api/music";
import type { AudioData, AudioResponse } from '@/api/music/type';

const useMusicStore = defineStore('music', {
    state: () => {
        return {
            musicUrl: '',
            musicState: false
        }
    },
    actions: {
        async getMusicUrl(id: number) {
            const result = await reqMusic(id) as AudioResponse
            if (result.code == 200) {
                this.musicUrl = result.data[0].url
            }else{
                return Promise.reject(new Error('获取音乐url失败'));
            }
        }
    },
    getters: {
    }
})
export default useMusicStore;