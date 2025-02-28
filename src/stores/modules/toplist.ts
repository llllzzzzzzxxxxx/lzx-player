import { defineStore } from "pinia";
import { reqPersonalized, reqTopList, reqSongDetail, reqPlaylistDetail } from "@/api/toplist";
import type { Playlist, ResultItem, Song } from "@/api/toplist/type";
import usePlayListStore from './playlist'

const useTopListStore = defineStore('toplist', {
    state: () => {
        return {
            detailList: <ResultItem[]>[],//云音乐特色榜
            topList: <Playlist[]>[],
            playlist: [],
            songs: <Song[]>[],
            isLoading: false,
        }
    },
    actions: {
        async getPersonalized() {
            let result = await reqPersonalized();
            if (result.code == 200) {
                this.detailList = result.result
            }
        },
        async getTopList() {
            let result = await reqTopList();
            if (result.code == 200) {
                this.topList = result.list
            }
        },
        async getSongDetail(ids: string) {
            this.isLoading = true
            let result = await reqSongDetail(ids);
            if (result.code == 200) {
                this.songs = result.songs
                usePlayListStore().topListPlayList(this.songs);
                console.log(this.songs);
                this.isLoading = false
            }
        },
        async getPlaylistDetail(id:number) {
            let result = await reqPlaylistDetail(id);
            if (result.code == 200) {
                this.playlist = result.playlist
            }
            let ids = result.playlist.trackIds.map((item: any) => item.id).join(',');
            this.getSongDetail(ids);
        }
    },
    getters: {

    }

})
export default useTopListStore