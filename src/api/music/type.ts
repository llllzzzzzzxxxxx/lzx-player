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

//评论信息类型---------------
// 用户 VIP 权限信息类型
export interface VipRights {
    associator: {
        vipCode: number;
        rights: boolean;
        iconUrl: string;
    } | null;
    musicPackage: {
        vipCode: number;
        rights: boolean;
        iconUrl: string;
    } | null;
    redplus: null;
    redVipAnnualCount: number;
    redVipLevel: number;
    relationType: number;
}

// 用户信息类型
export interface User {
    locationInfo: null;
    liveInfo: null;
    anonym: number;
    userType: number;
    avatarDetail: {
        userType: number;
        identityLevel: number;
        identityIconUrl: string;
    } | null;
    avatarUrl: string;
    followed: boolean;
    mutual: boolean;
    remarkName: null | string;
    socialUserId: null;
    vipRights: VipRights;
    nickname: string;
    authStatus: number;
    expertTags: null;
    experts: null;
    vipType: number;
    commonIdentity: null;
    userId: number;
    target: null;
}

// 楼层评论展示信息类型
export interface ShowFloorComment {
    replyCount: number;
    comments: null;
    showReplyCount: boolean;
}

// 评论 IP 地址信息类型
export interface IpLocation {
    ip: null;
    location: string;
    userId: number;
}

// 挂件数据信息类型
export interface PendantData {
    id: number;
    imageUrl: string;
}

// 评论信息类型
export interface Comment {
    user: User;
    beReplied: any[];
    pendantData: PendantData | null;
    showFloorComment: ShowFloorComment;
    status: number;
    commentId: number;
    content: string;
    richContent: string | null;
    contentResource: null;
    time: number;
    timeStr: string;
    needDisplayTime: boolean;
    likedCount: number;
    expressionUrl: null;
    commentLocationType: number;
    parentCommentId: number;
    decoration: {};
    repliedMark: null;
    grade: null;
    userBizLevels: null;
    ipLocation: IpLocation;
    owner: boolean;
    medal: null;
    likeAnimationMap: {};
    liked: boolean;
}

// 接口返回数据类型
export interface CommentResponse {
    isMusician: boolean;
    userId: number;
    topComments: any[];
    moreHot: boolean;
    hotComments: Comment[]|null;
    commentBanner: null;
    code: number;
    comments: Comment[];
    total: number;
    more: boolean;
}