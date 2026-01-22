export interface TwitterAuth {
    appKey: string;
    appSecret: string;
    accessToken: string;
    accessSecret: string;
}

export interface BSkyAuth {
    identifier: string;
    password: string;
}

export interface ThreadsAuth {
    username: string;
    password: string;
}

export interface Config {
    Twitter: TwitterAuth;
    Bluesky: BSkyAuth;
    Threads: ThreadsAuth;
    FilesPath: string;
}

export interface TargetSend {
    filePath: string | null;
    quote: string | null;
}