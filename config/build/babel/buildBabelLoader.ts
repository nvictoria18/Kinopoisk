export const buildBabelLoader = () => {
    return ({
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        },
    });

}

