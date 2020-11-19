const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@api': path.resolve(__dirname, './src/api'),
            '@components': path.resolve(__dirname, './src/components'),
            '@lib': path.resolve(__dirname, './src/lib'),
            '@src': path.resolve(__dirname, './src'),
            '@views': path.resolve(__dirname, './src/views'),
        }
    }
};