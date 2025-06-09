import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/types';
import { buildResolvers } from './buildResolvers';

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const isDev = options.mode === 'development';

    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name][contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options, isDev),
        module: {
            rules: buildLoaders(options, isDev),
        },
        resolve: buildResolvers(options),

        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}

