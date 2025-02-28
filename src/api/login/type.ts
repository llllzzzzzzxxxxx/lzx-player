//用户信息
// 定义用户积分相关类型
export interface UserPoint {
    userId: number;
    balance: number;
    updateTime: number;
    version: number;
    status: number;
    blockBalance: number;
}
// 定义隐私设置相关类型
export interface PrivacyItemUnlimit {
    area: boolean;
    college: boolean;
    gender: boolean;
    age: boolean;
    villageAge: boolean;
}
// 定义用户资料相关类型
export interface Profile {
    privacyItemUnlimit: PrivacyItemUnlimit;
    avatarDetail: null;
    createTime: number;
    vipType: number;
    mutual: boolean;
    remarkName: null | string;
    birthday: number;
    accountStatus: number;
    authStatus: number;
    avatarImgId: number;
    avatarUrl: string;
    backgroundImgId: number;
    backgroundUrl: string;
    city: number;
    detailDescription: string;
    djStatus: number;
    expertTags: null;
    followed: boolean;
    gender: number;
    nickname: string;
    province: number;
    userType: number;
    defaultAvatar: boolean;
    experts: {};
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    description: string;
    userId: number;
    signature: string;
    authority: number;
    followeds: number;
    follows: number;
    blacklist: boolean;
    eventCount: number;
    allSubscribedCount: number;
    playlistBeSubscribedCount: number;
    followTime: null | number;
    followMe: boolean;
    artistIdentity: any[];
    cCount: number;
    inBlacklist: boolean;
    sDJPCount: number;
    playlistCount: number;
    sCount: number;
    newFollows: number;
}
// 定义绑定信息相关类型
export interface Binding {
    expiresIn: number;
    refreshTime: number;
    bindingTime: number;
    tokenJsonStr: null | string;
    url: string;
    expired: boolean;
    userId: number;
    id: number;
    type: number;
}
// 定义用户资料村庄信息相关类型
export interface ProfileVillageInfo {
    title: string;
    imageUrl: null | string;
    targetUrl: string;
}
// 定义用户信息的主要类型
export interface UserDataResponse {
    level: number;
    listenSongs: number;
    userPoint: UserPoint;
    mobileSign: boolean;
    pcSign: boolean;
    profile: Profile;
    peopleCanSeeMyPlayRecord: boolean;
    bindings: Binding[];
    adValid: boolean;
    code: number;
    newUser: boolean;
    recallUser: boolean;
    createTime: number;
    createDays: number;
    profileVillageInfo: ProfileVillageInfo;
}
//用户歌单
// 用户VIP权限信息类型
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
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags: null;
    experts: null;
    djStatus: number;
    vipType: number;
    remarkName: null | string;
    authenticationTypes: number;
    avatarDetail: null;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    anchor: boolean;
    avatarImgId_str: string;
}

// 楼层评论展示信息类型
export interface ShowFloorComment {
    replyCount: number;
    comments: null;
    showReplyCount: boolean;
}

// 评论IP地址信息类型
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

// 歌单信息类型
export interface userPlaylist {
    subscribers: any[];
    subscribed: null;
    creator: User;
    artists: null;
    tracks: null;
    top: boolean;
    updateFrequency: null;
    backgroundCoverId: number;
    backgroundCoverUrl: null;
    titleImage: number;
    titleImageUrl: null;
    englishTitle: null;
    opRecommend: boolean;
    recommendInfo: null;
    subscribedCount: number;
    cloudTrackCount: number;
    userId: number;
    totalDuration: number;
    coverImgId: number;
    privacy: number;
    trackUpdateTime: number;
    trackCount: number;
    updateTime: number;
    commentThreadId: string;
    coverImgUrl: string;
    specialType: number;
    anonimous: boolean;
    createTime: number;
    highQuality: boolean;
    newImported: boolean;
    trackNumberUpdateTime: number;
    playCount: number;
    adType: number;
    description: null;
    tags: any[];
    ordered: boolean;
    status: number;
    name: string;
    id: number;
    coverImgId_str: string | null;
    sharedUsers: null;
    shareStatus: null;
    copied: boolean;
    containsTracks: boolean;
}

// 响应数据类型
export interface PlaylistResponse {
    more: boolean;
    playlist: userPlaylist[];
    code: number;
}
