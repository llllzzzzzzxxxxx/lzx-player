export type PlaylistTrack = {
    first: string;  // Track title
    second: string; // Artist name
};

export type Playlist = {
    subscribers: any[];        // Array of subscribers (could be more specific)
    subscribed: boolean | null; // Subscription status
    creator: any | null;       // Creator information (could be more specific)
    artists: any | null;       // Artist information (could be more specific)
    tracks: PlaylistTrack[];           // List of tracks
    updateFrequency: string;   // Frequency of updates
    backgroundCoverId: number; // Background cover ID
    backgroundCoverUrl: string | null; // Background cover URL
    titleImage: number;        // Title image ID
    coverText: string | null;  // Cover text
    titleImageUrl: string | null; // Title image URL
    coverImageUrl: string | null; // Cover image URL
    iconImageUrl: string | null;  // Icon image URL
    englishTitle: string | null;   // English title
    opRecommend: boolean;       // Whether it's recommended
    recommendInfo: any | null; // Recommendation info (could be more specific)
    socialPlaylistCover: string | null; // Social playlist cover
    tsSongCount: number;       // Song count related to timestamp
    algType: any | null;       // Algorithm type (could be more specific)
    highQuality: boolean;      // High quality flag
    specialType: number;       // Special type ID
    coverImgId: number;        // Cover image ID
    newImported: boolean;      // New imported flag
    anonimous: boolean;        // Anonymous flag
    updateTime: number;        // Last update time
    coverImgUrl: string;       // Cover image URL
    trackCount: number;        // Total number of tracks
    commentThreadId: string;   // Comment thread ID
    trackUpdateTime: number;   // Track update time
    totalDuration: number;     // Total duration (in milliseconds)
    playCount: number;         // Total play count
    trackNumberUpdateTime: number; // Track number update time
    privacy: number;           // Privacy level
    adType: number;            // Ad type
    subscribedCount: number;   // Number of subscribers
    cloudTrackCount: number;   // Cloud track count
    createTime: number;        // Creation time
    ordered: boolean;          // Whether tracks are ordered
    description: string;       // Description of the playlist
    status: number;            // Status code
    tags: string[];            // Array of tags
    userId: number;            // User ID of the playlist owner
    name: string;              // Name of the playlist
    id: number;                // Playlist ID
    coverImgId_str: string;    // Cover image ID as string
    ToplistType: string;       // Type of the toplist
};

export type TopListResponseData = {
    code: number;              // Response code
    list: Playlist[];          // Array of playlists
};
//
export type ResultItem = {
    id: number;                      // Unique identifier
    type: number;                    // Type of item
    name: string;                    // Name of the item
    copywriter: string;              // Copywriter text
    picUrl: string;                  // URL of the picture
    canDislike: boolean;             // Whether the item can be disliked
    trackNumberUpdateTime: number;   // Track number update time (timestamp)
    playCount: number;               // Total play count
    trackCount: number;              // Number of tracks associated
    highQuality: boolean;            // High quality flag
    alg: string;                     // Algorithm type or identifier
};

export type PersonalizedResponseData = {
    hasTaste: boolean;               // Indicates if user has taste
    code: number;                    // Response code
    category: number;                // Category ID
    result: ResultItem[];            // Array of result items
};
//
export type Artist = {
    id: number;              // Artist ID
    name: string;           // Artist name
    tns: string[];          // Transliterations (if any)
    alias: string[];        // Aliases (if any)
};

export type Album = {
    id: number;              // Album ID
    name: string;            // Album name
    picUrl: string;          // Album cover URL
    tns: string[];           // Transliterations (if any)
    pic_str: string;         // Picture ID as string
    pic: number;             // Picture ID
};

export type Song = {
    name: string;            // Track name
    id: number;              // Track ID
    pst: number;             // Post status
    t: number;               // Track type
    ar: Artist[];            // Array of artists
    alia: string[];          // Aliases (if any)
    pop: number;             // Popularity
    st: number;              // Status
    rt: string;              // Response type
    fee: number;             // Fee type
    v: number;               // Version
    crbt: any;               // CRBT (if any)
    cf: string;              // CF (if any)
    al: Album;               // Album details
    dt: number;              // Duration (in milliseconds)
    h: {                     // High quality details
        br: number;          // Bitrate
        fid: number;        // File ID
        size: number;       // Size (in bytes)
        vd: number;         // Volume data
        sr: number;         // Sample rate
    };
    m: {                     // Medium quality details
        br: number;          // Bitrate
        fid: number;        // File ID
        size: number;       // Size (in bytes)
        vd: number;         // Volume data
        sr: number;         // Sample rate
    };
    l: {                     // Low quality details
        br: number;          // Bitrate
        fid: number;        // File ID
        size: number;       // Size (in bytes)
        vd: number;         // Volume data
        sr: number;         // Sample rate
    };
    sq: {                    // Super quality details
        br: number;          // Bitrate
        fid: number;        // File ID
        size: number;       // Size (in bytes)
        vd: number;         // Volume data
        sr: number;         // Sample rate
    };
    hr: any;                 // High resolution (if any)
    a: any;                  // Additional info (if any)
    cd: string;             // CD number
    no: number;             // Track number
    rtUrl: any;             // RT URL (if any)
    ftype: number;          // File type
    rtUrls: string[];       // RT URLs (if any)
    djId: number;           // DJ ID
    copyright: number;      // Copyright info
    s_id: number;           // S ID
    mark: number;           // Mark
    originCoverType: number; // Origin cover type
    originSongSimpleData: any; // Origin song simple data
    tagPicList: any;       // Tag picture list (if any)
    resourceState: boolean; // Resource state
    version: number;       // Version number
    songJumpInfo: any;     // Song jump info (if any)
    entertainmentTags: any; // Entertainment tags (if any)
    awardTags: any;        // Award tags (if any)
    displayTags: any;      // Display tags (if any)
    single: number;        // Single status
    noCopyrightRcmd: any;  // No copyright recommendation (if any)
    mv: number;            // Music video ID
    rtype: number;         // Resource type
    rurl: any;             // Resource URL (if any)
    mst: number;           // MST
    cp: number;            // Copyright information
    publishTime: number;   // Publish time (timestamp)
};

export type Privilege = {
    id: number;              // Track ID
    fee: number;             // Fee type
    payed: number;           // Payment status
    st: number;              // Status
    pl: number;              // Play level
    dl: number;              // Download level
    sp: number;              // Special status
    cp: number;              // Copyright info
    subp: number;            // Subscription status
    cs: boolean;             // Can skip
    maxbr: number;           // Maximum bitrate
    fl: number;              // FL level
    toast: boolean;          // Toast notification
    flag: number;            // Flag
    preSell: boolean;        // Pre-sell status
    playMaxbr: number;       // Play max bitrate
    downloadMaxbr: number;   // Download max bitrate
    maxBrLevel: string;      // Maximum bitrate level
    playMaxBrLevel: string;  // Play max bitrate level
    downloadMaxBrLevel: string; // Download max bitrate level
    plLevel: string;         // Play level
    dlLevel: string;         // Download level
    flLevel: string;         // FL level
    rscl: number;            // Resource scale
    freeTrialPrivilege: {   // Free trial privileges
        resConsumable: boolean; // Resource consumable
        userConsumable: boolean; // User consumable
        listenType: any;       // Listen type
        cannotListenReason: number; // Cannot listen reason
        playReason: any;       // Play reason
        freeLimitTagType: any; // Free limit tag type
    };
    rightSource: number;     // Right source
    chargeInfoList: {       // Charge info list
        rate: number;         // Bitrate rate
        chargeUrl: any;       // Charge URL
        chargeMessage: any;   // Charge message
        chargeType: number;    // Charge type
    }[];
    code: number;            // Response code
    message: any;            // Response message
};

export type SongDetailResponseData = {
    songs: Song[];          // Array of songs
    privileges: Privilege[]; // Array of privileges
    code: number;            // Response code
};
//

export type PlaylistResponseData = {
    code: number;            // Response code
    fromUserCount: number;   // Number of users who contributed
    fromUsers: any;          // Users who contributed (if any)
    playlist: any;       // Playlist details
    privileges: any[];  // Array of privileges
    relatedVideos: any;      // Related videos (if any)
    resEntrance: any;        // Resource entrance (if any)
    sharedPrivilege: any;    // Shared privilege (if any)
    songFromUsers: any;      // Songs from users (if any)
    urls: any;               // URLs (if any)
};
