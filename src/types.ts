export interface TwitterAuth {
    appKey: string;
    appSecret: string;
    accessToken: string;
    accessSecret: string;
}

export interface Config {
    Twitter: TwitterAuth;
    FilesPath: string;
}

export interface TargetSend {
    filePath: string | null;
    quote: string | null;
}