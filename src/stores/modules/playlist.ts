import { defineStore } from "pinia";
import type { PlayListSongs } from '@/api/playlist/type';
import type { AudioData, AudioResponse } from '@/api/music/type';
import type { Song } from "@/api/toplist/type";
import type { SearchResponseData } from '@/api/search/type';
import useMusicStore,{PlaySequence} from "./music";
const usePlayListStore = defineStore('playlist', {
    state: () => ({
        SearchSongs: <PlayListSongs[]>[],
        topListSongs: <PlayListSongs[]>[],
        UserListSong: <PlayListSongs[]>[],
        PlayingSong: <PlayListSongs[]>[],
        HistorySong: <PlayListSongs[]>[],
        playingIndex: 0,
    }),
    actions: {
        searchPlayList(SearchResponseData: SearchResponseData) {
            this.SearchSongs = SearchResponseData.result.songs.map(song => ({
                id: song.id,
                name: song.name,
                artists: song.artists.map(artist => artist.name).join(', '),
                album: song.album.name,
                picUrl: song.artists[0].picUrl || '', // 防止 picUrl 为 undefined
                isPlaying: false
            }));
        },
        topListPlayList(songs: Song[]) {
            this.topListSongs = songs.map(song => ({
                id: song.id,
                name: song.name,
                artists: song.ar.map(artist => artist.name).join(', '),
                album: song.al.name,
                picUrl: song.al.picUrl || '',// 防止 picUrl 为 undefined
                isPlaying: false
            }));
        },
        userPlayList(songs: Song[]) {
            this.UserListSong = songs.map(song => ({
                id: song.id,
                name: song.name,
                artists: song.ar.map(artist => artist.name).join(', '),
                album: song.al.name,
                picUrl: song.al.picUrl || '', // 防止 picUrl 为 undefined
                isPlaying:false
            }));
        },
        addHistorySong(song: PlayListSongs) {
            const existingIndex = this.HistorySong.findIndex(s => s.id === song.id);
            if (existingIndex !== -1) {
                this.HistorySong.splice(existingIndex, 1); // 删除旧歌曲
            }
            this.HistorySong.push(song);
            localStorage.setItem('HistorySong', JSON.stringify(this.HistorySong));
        },
        addPlayingSong(song: PlayListSongs) {
            const existingIndex = this.PlayingSong.findIndex(existingSong => existingSong.id === song.id);
            if (existingIndex !== -1) {
                return
            }
            this.PlayingSong.push(song);
            localStorage.setItem('PlayingSong', JSON.stringify(this.PlayingSong));
        },
        getLocalMusic(){
            this.PlayingSong = JSON.parse(localStorage.getItem('PlayingSong') || '[]');
            this.HistorySong = JSON.parse(localStorage.getItem('HistorySong') || '[]');
        },
        clearHistorySong() {
            this.HistorySong = [];
            localStorage.removeItem('HistorySong');
        },
        clearPlayingSong() { // 清空播放la
            this.PlayingSong = [];
            localStorage.removeItem('PlayingSong');
        },
        playNextSong() {
            if (this.PlayingSong.length === 0) return; // 如果没有歌曲，直接返回
        
            const currentIndex = this.PlayingSong.findIndex(song => this.playingIndex === song.id);
            if (currentIndex === -1) return; // 如果没有正在播放的歌曲，直接返回
        
            const musicStore = useMusicStore(); // 获取 musicStore
            const sequence = musicStore.sequence; // 获取当前播放模式
        
            let nextIndex;
            switch (sequence) {
              case PlaySequence.Sequential: // 顺序播放
                nextIndex = (currentIndex + 1) % this.PlayingSong.length;
                break;
              case PlaySequence.Random: // 随机播放
                nextIndex = Math.floor(Math.random() * this.PlayingSong.length);
                break;
              case PlaySequence.Loop: // 单曲循环
                nextIndex = currentIndex;
                break;
              default:
                nextIndex = (currentIndex + 1) % this.PlayingSong.length;
            }
            console.log(nextIndex);
            this.playingIndex = this.PlayingSong[nextIndex].id;
            return this.PlayingSong[nextIndex];
          },
        
          // 播放上一首
          playPreviousSong() {
            if (this.PlayingSong.length === 0) return; // 如果没有歌曲，直接返回
        
            const currentIndex = this.PlayingSong.findIndex(song => this.playingIndex === song.id);
            if (currentIndex === -1) return; // 如果没有正在播放的歌曲，直接返回
        
            const musicStore = useMusicStore(); // 获取 musicStore
            const sequence = musicStore.sequence; // 获取当前播放模式
        
            let previousIndex;
            switch (sequence) {
              case PlaySequence.Sequential: // 顺序播放
                previousIndex = (currentIndex - 1 + this.PlayingSong.length) % this.PlayingSong.length;
                break;
              case PlaySequence.Random: // 随机播放
                previousIndex = Math.floor(Math.random() * this.PlayingSong.length);
                break;
              case PlaySequence.Loop: // 单曲循环
                previousIndex = currentIndex;
                break;
              default:
                previousIndex = (currentIndex - 1 + this.PlayingSong.length) % this.PlayingSong.length;
            }
        
            this.playingIndex = this.PlayingSong[previousIndex].id;
            return this.PlayingSong[previousIndex];
          },
        
    },
    getters: {

    }
});
export default usePlayListStore;