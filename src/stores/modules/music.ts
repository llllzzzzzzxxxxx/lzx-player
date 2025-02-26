import { reqMusic,reqMusicDetail,reqMusicLyric } from "@/api/music";
import type { AudioData, AudioResponse } from '@/api/music/type';
import type { Song ,SongDetailResponse,LrcResponse } from '@/api/music/type';
import { defineStore } from "pinia";
// 定义播放顺序的枚举类型
export enum PlaySequence {
    Sequential = 0, // 顺序播放
    Random = 1,     // 随机播放
    Loop = 2        // 单曲循环
}

const useMusicStore = defineStore('music', {
    state: () => {
        return {
            musicUrl: '',
            musicState: false,
            song: <Song>{},
            currentTime: '00:00',
            sequence: PlaySequence.Sequential, // 使用枚举类型
            lyric: [] as { time: number; text: string }[], // 修改为存储解析后的歌词数组
        }
    },
    actions: {
        async getMusicUrl(id: number) {
            const result = await reqMusic(id) as AudioResponse
            if (result.code == 200&&result.data[0].code===200) {
                this.musicUrl = result.data[0].url
                this.getMusicDetail(id)
                return Promise.resolve(this.musicUrl);
            }else{
                alert('获取音乐url失败,请登录后重试')
                return Promise.reject(new Error('获取音乐url失败'));
            }
        },
        async getMusicDetail(ids: number) {
            const result = await reqMusicDetail(ids) as SongDetailResponse
            if (result.code == 200) {
                this.song = result.songs[0]
                const lyricResult = await reqMusicLyric(ids) as LrcResponse
                this.lyric = this.parseLyric(lyricResult.lrc.lyric); // 解析歌词
                console.log("解析后的歌词", this.lyric);
                
                return Promise.resolve(this.song);
            }else{
                alert('获取音乐详情失败,请登录后重试')
                return Promise.reject(new Error('获取音乐详情失败'));
            }
        },
        // 新增歌词解析方法
        parseLyric(lyricText: string): { time: number; text: string }[] {
            const lines = lyricText.split('\n');
            const lyricArray: { time: number; text: string }[] = [];

            lines.forEach(line => {
                const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/);
                if (match) {
                    const minutes = parseInt(match[1]);
                    const seconds = parseInt(match[2]);
                    const milliseconds = parseInt(match[3]);
                    const text = match[4].trim();
                    const time = minutes * 60 + seconds + milliseconds / 1000;
                    lyricArray.push({ time, text });
                }
            });

            return lyricArray;
        },
        // 新增切换播放顺序的方法
        toggleSequence() {
            this.sequence = (this.sequence + 1) % 3;
        }
    },
    getters: {
    }
})
export default useMusicStore;