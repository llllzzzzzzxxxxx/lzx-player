import { defineStore } from "pinia";
import type { PlayListSongs } from '@/api/playlist/type';
import type { SearchResponseData } from '@/api/search/type';
const usePlayListStore = defineStore('playlist', {
    state: () => ({
        songs: <PlayListSongs[]>[]
    }),
    actions: {
        searchPlayList(SearchResponseData: SearchResponseData){
            this.songs = SearchResponseData.result.songs.map(song => ({
                id: song.id,
                name: song.name,
                artists: song.artists.map(artist => artist.name).join(', '),
                album: song.album.name,
                picUrl: song.artists[0].picUrl || '' // 防止 picUrl 为 undefined
            }));
        }
    },
    getters: {
        
    }
});
export default usePlayListStore;