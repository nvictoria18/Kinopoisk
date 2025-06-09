import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export const buildPlugins = (options: BuildOptions, isDev: boolean): Configuration['plugins'] => {
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: options.paths.html }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
            __ENV__: JSON.stringify(options.mode),
        }),
    ];

    if (isDev) {
        plugins.push(
            new webpack.ProgressPlugin(),
            new ForkTsCheckerWebpackPlugin(),
            new ReactRefreshWebpackPlugin()
        )

    }

    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin(),
        )
    }

    if (options.analyzer) {
        plugins.push(
            new BundleAnalyzerPlugin()
        )
    }

    return plugins;
}