export const buildBabelLoader = () => {
    return ({
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        },
    });

}

