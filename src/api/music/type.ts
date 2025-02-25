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