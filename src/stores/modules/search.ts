import { defineStore } from "pinia";
import { reqSearch, reqSearchHot } from "@/api/search";
import type{ SearchResult,SearchResponseData,HotSearchResponseData,HotSearchResult} from "@/api/search/type";
import usePlayListStore from '@/stores/modules/playlist';
const useSearchStore = defineStore("search", {
    state: () =>{
        return {
            searchList: <SearchResult>{},
            hotList: <HotSearchResult>{},
        }
    },
    actions:{
        async getSearchList(keywords: string ,limit: number,offset: number){
            let result:SearchResponseData = await reqSearch(keywords,limit,offset);
            if(result.code === 200&&result.result){
                this.searchList = result.result;
                usePlayListStore().searchPlayList(result);
            }
        },
        async getHotList(){
            let result:HotSearchResponseData = await reqSearchHot();
            if(result.code === 200){
                this.hotList = result.result;
            }
        },

    },
    getters:{

    }
})
export default useSearchStore