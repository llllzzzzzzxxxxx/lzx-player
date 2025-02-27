import { defineStore } from "pinia";
import type { PlayListSongs } from '@/api/playlist/type';
import type { Song } from "@/api/toplist/type";
import type { SearchResponseData } from '@/api/search/type';
const usePlayListStore = defineStore('playlist', {
    state: () => ({
        SearchSongs: <PlayListSongs[]>[],
        topListSongs: <PlayListSongs[]>[],
    }),
    actions: {
        searchPlayList(SearchResponseData: SearchResponseData){
            this.SearchSongs = SearchResponseData.result.songs.map(song => ({
                id: song.id,
                name: song.name,
                artists: song.artists.map(artist => artist.name).join(', '),
                album: song.album.name,
                picUrl: song.artists[0].picUrl || '' // 防止 picUrl 为 undefined
            }));
        },
        topListPlayList(songs: Song[]) {
            this.topListSongs = songs.map(song => ({
                id: song.id,
                name: song.name,
                artists: song.ar.map(artist => artist.name).join(', '),
                album: song.al.name,
                picUrl: song.al.picUrl || '' // 防止 picUrl 为 undefined
            }));
        }
    },
    getters: {
        
    }
});
export default usePlayListStore;