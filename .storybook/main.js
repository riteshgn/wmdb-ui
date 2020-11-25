const CracoConfig = require('../craco.config');

module.exports = {
    stories: [ '../src/**/*.stories.jsx' ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app"
    ],
    webpackFinal: config => ({
        ...config,
        resolve: {
            ...config.resolve,
            alias: {
                ...config.alias,
                ...CracoConfig.webpack.alias
            }
        }
    })
}