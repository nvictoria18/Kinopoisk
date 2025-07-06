import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildBabelLoader } from "./babel/buildBabelLoader";

export const buildLoaders = (options: BuildOptions, isDev: boolean): ModuleOptions['rules'] => {
    const tsLoader = {
        // ts-loader умеет работать с JSX
        // если б мы не использовали typescript нужен был бы babel-loader
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                },

            }
        ],
        exclude: options.paths.exclude,

    };

    const babelLoader = buildBabelLoader();

    const cssLoader = {
        test: /\.css$/i,
        include: options.paths.include,
        exclude: options.paths.exclude,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
    };

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const fontsLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    const svgrLoader = {
        test: /\.svg$/i,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                // svgoConfig: {
                //     plugins: [
                //         {
                //             name: 'convertColors',
                //             params: {
                //                 currentColor: true
                //             }
                //         }
                //     ]
                // }
            }
        }],
    };

    return [
        // tsLoader,
        babelLoader,
        cssLoader,
        fontsLoader,
        assetLoader,
        svgrLoader
    ]
}