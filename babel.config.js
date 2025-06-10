
module.exports = {
    presets: [
        "@babel/preset-env",
        [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ],
        "@babel/preset-typescript",
    ],
    plugins: [
        ["./config/build/babel/removeDataTestIdBabelPlugin", {
            "props": [
                "data-testid"
            ]
        }]
    ]
}