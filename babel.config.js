module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                "module:react-native-dotenv",
                {
                    moduleName: "react-native-dotenv",
                },
            ],
            'react-native-reanimated/plugin', // This plugin should be at the last
            'react-native-paper/babel'
        ],
    };
};
