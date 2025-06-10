export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    include: string;
    exclude: string;
    public: string;
}

export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    analyzer?: boolean;
    mode: BuildMode;
    platform?: BuildPlatform;
}