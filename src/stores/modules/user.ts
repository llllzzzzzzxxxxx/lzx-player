import { defineStore } from "pinia";
import { reqLogin,reqUserPlaylistDetail } from "@/api/login";
import type { UserDataResponse,Profile,userPlaylist } from "@/api/login/type";
import {reqPlaylistDetail,reqSongDetail} from "@/api/toplist";
import type { Playlist, Song } from "@/api/toplist/type";
import usePlayListStore from "./playlist";
const useUserStore = defineStore('user', {
    state:()=>{
        return{
            userinfo:<Profile>{},
            hasChange:true,
            isLoading:false,
            isLogin:false,
            isHelp:false,
            userPlaylist:<userPlaylist[]>[],
        }
    },
    actions:{
        async getUserData(uid:number) {
            let result = await reqLogin(uid);
            if (result.code == 200) {
                localStorage.setItem('user',JSON.stringify(result.profile));
                this.hasChange = true;
            }
        },
        //获取歌单
        async getUserPlaylistDetail(uid:number) {
            let result = await reqUserPlaylistDetail(uid);
            if (result.code == 200) {
                this.userPlaylist = result.playlist;
            }
        },
        //获取歌单详情
        async getUserPlaylist(uid:number) {
                this.isLoading = true;
            let result = await reqPlaylistDetail(uid);
            if (result.code == 200) {
                let ids = result.playlist.trackIds.map((item: any) => item.id).join(',');
                let songsResult = await reqSongDetail(ids);
                usePlayListStore().userPlayList(songsResult.songs);
                this.isLoading = false;
            }
        },
        getUser(){
            let user = localStorage.getItem('user');
            if(user){
                this.userinfo = JSON.parse(user);
                console.log("userInfo"+this.userinfo.userId);
            }
        },
        logout() {
            localStorage.removeItem('user');
            this.isLogin = false;
            this.hasChange = false;
            this.userPlaylist = [];
        },
    },
    getters:{
    }
})
export default useUserStore