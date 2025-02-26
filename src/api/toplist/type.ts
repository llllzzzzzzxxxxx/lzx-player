export type Track = {
    first: string;  // Track title
    second: string; // Artist name
};

export type Playlist = {
    subscribers: any[];        // Array of subscribers (could be more specific)
    subscribed: boolean | null; // Subscription status
    creator: any | null;       // Creator information (could be more specific)
    artists: any | null;       // Artist information (could be more specific)
    tracks: Track[];           // List of tracks
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

export type PersonalizedResponseData = {
    code: number;              // Response code
    list: Playlist[];          // Array of playlists
};
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

export type TopListResponseData = {
    hasTaste: boolean;               // Indicates if user has taste
    code: number;                    // Response code
    category: number;                // Category ID
    result: ResultItem[];            // Array of result items
};