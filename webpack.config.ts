import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import {
    BuildMode,
    BuildPaths,
    BuildPlatform
} from './config/build/types/types';

interface EnvVariables {
    mode?: BuildMode;
    port?: number;
    analyzer: boolean;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules')
    }
    const config: webpack.Configuration = buildWebpack({
        paths,
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop', 
    })
    
    return config;
}