/* config-overrides.js */
const tsImportPluginFactory = require('ts-import-plugin')
const {
    getLoader
} = require("react-app-rewired");
const rewireLess = require('react-app-rewire-less');
const antdTheme = require('./override-variables'); // Include variables to override antd theme

module.exports = function override(config, env) {
    const tsLoader = getLoader(
        config.module.rules,
        rule =>
        rule.loader &&
        typeof rule.loader === 'string' &&
        rule.loader.includes('ts-loader')
    );

    tsLoader.options = {
        getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
                libraryDirectory: 'es',
                libraryName: 'antd',
                style: true,
            })]
        })
    };

    config = rewireLess.withLoaderOptions({
        javascriptEnabled: true,
        modifyVars: antdTheme

    })(config, env);

    return config;
}