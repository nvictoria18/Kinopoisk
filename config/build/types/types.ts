export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    include: string;
    exclude: string;
}

export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    analyzer?: boolean;
    mode: BuildMode;
    platform?: BuildPlatform;
}