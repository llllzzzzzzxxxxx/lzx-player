// 搜索结果
export interface Artist {
    id: number;
    name: string;
    picUrl: string | null;
    alias: string[];
    albumSize: number;
    picId: number;
    fansGroup: any | null;
    img1v1Url: string;
    img1v1: number;
    trans: any | null;
}

export interface Album {
    id: number;
    name: string;
    artist: Artist;
    publishTime: number;
    size: number;
    copyrightId: number;
    status: number;
    picId: number;
    mark: number;
    alia?: string[]; // 可选字段
}

export interface Song {
    id: number;
    name: string;
    artists: Artist[];
    album: Album;
    duration: number;
    copyrightId: number;
    status: number;
    alias: string[];
    rtype: number;
    ftype: number;
    mvid: number;
    fee: number;
    rUrl: string | null;
    mark: number;
}

export interface SearchResult {
    songs: Song[];
    hasMore: boolean;
    songCount: number;
}

export interface SearchResponseData {
    code: number;
    message: string;
    ok: boolean;
    searchResult: SearchResult;
}

// 热搜项
export interface HotSearchItem {
    first: string;  // 热搜词
    second: number; // 热度值
    third: any | null; // 备用字段
    iconType: number; // 图标类型
}

// 热搜结果
export interface HotSearchResult {
    hots: HotSearchItem[];
}

// 热搜响应数据
export interface HotSearchResponseData {
    code: number;
    hotSearchResult: HotSearchResult;
}

