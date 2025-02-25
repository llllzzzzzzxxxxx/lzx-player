export interface AudioData {
    id: number;
    url: string;
    br: number;
    size: number;
    md5: string;
    code: number;
    expi: number;
    type: string;
    gain: number;
    peak: number;
    closedGain: number;
    closedPeak: number;
    fee: number;
    uf: null | any;
    payed: number;
    flag: number;
    canExtend: boolean;
    freeTrialInfo: null | any;
    level: string;
    encodeType: string;
    channelLayout: null | any;
    freeTrialPrivilege: {
        resConsumable: boolean;
        userConsumable: boolean;
        listenType: null | any;
        cannotListenReason: null | any;
        playReason: null | any;
        freeLimitTagType: null | any;
    };
    freeTimeTrialPrivilege: {
        resConsumable: boolean;
        userConsumable: boolean;
        type: number;
        remainTime: number;
    };
    urlSource: number;
    rightSource: number;
    podcastCtrp: null | any;
    effectTypes: null | any;
    time: number;
    message: null | any;
    levelConfuse: null | any;
    musicId: string;
}

export interface AudioResponse {
    code: number;
    data: AudioData[];
}

// 新增 Song 接口
export interface Song {
    name: string;
    id: number;
    pst: number;
    t: number;
    ar: { id: number; name: string; tns: any[]; alias: any[] }[];
    alia: any[];
    pop: number;
    st: number;
    rt: string;
    fee: number;
    v: number;
    crbt: any;
    cf: string;
    al: { id: number; name: string; picUrl: string; tns: any[]; pic_str: string; pic: number };
    dt: number;
    h: { br: number; fid: number; size: number; vd: number; sr: number };
    m: { br: number; fid: number; size: number; vd: number; sr: number };
    l: { br: number; fid: number; size: number; vd: number; sr: number };
    sq: { br: number; fid: number; size: number; vd: number; sr: number };
    hr: any;
    a: any;
    cd: string;
    no: number;
    rtUrl: any;
    ftype: number;
    rtUrls: any[];
    djId: number;
    copyright: number;
    s_id: number;
    mark: number;
    originCoverType: number;
    originSongSimpleData: any;
    tagPicList: any;
    resourceState: boolean;
    version: number;
    songJumpInfo: any;
    entertainmentTags: any;
    awardTags: any;
    displayTags: any;
    single: number;
    noCopyrightRcmd: any;
    mv: number;
    rtype: number;
    rurl: any;
    mst: number;
    cp: number;
    publishTime: number;
    tns: string[];
}

// 新增 SongDetailResponse 接口
export interface SongDetailResponse {
    songs: Song[];
    privileges: any[];
    code: number;
}
export interface LyricLine {
    time: string; // 歌词时间戳，例如 "00:00.000"
    text: string; // 歌词文本
}

export interface LyricData {
    version: number; // 歌词版本
    lyric: string; // 完整歌词文本
    lines: LyricLine[]; // 解析后的歌词行数组
}

export interface LrcResponse {
    sgc: boolean; // 是否支持歌词滚动
    sfy: boolean; // 是否支持逐字歌词
    qfy: boolean; // 是否支持逐字歌词翻译
    lrc: LyricData; // 歌词数据
    klyric: LyricData; // 韩语歌词数据
    tlyric: LyricData; // 翻译歌词数据
    romalrc: LyricData; // 罗马音歌词数据
    code: number; // 响应状态码
}