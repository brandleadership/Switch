const path = require('path');

const {
    BuildConfig,
    ModuleConfig,
    WebpackConfigBuilder,
    Version,
    DesignType,
} = require('@bsi-cx/design-build');

const landingpageBuildConfig = new BuildConfig()
    .withName('Switch-LP')
    .withVersion('1.0.0')
    .withDesignType(DesignType.LANDINGPAGE)
    .withTargetVersion(Version.CX_22_0)
    .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
    .withPropertiesFilePath('properties.js')
    .withModules(new ModuleConfig().withName('main').withPath('main.js'))
    .withAdditionalFilesToCopy({
        from: path.resolve(
            __dirname,
            'templates',
            'landingpage',
            'preview.png'
        ),
        to: 'static/preview.png',
    });

module.exports = WebpackConfigBuilder.fromConfigs(
    landingpageBuildConfig
        .clone()
        .withName('Switch-lp-de-cx-22.0')
        .withPropertiesFilePath('lang-de.js'),
    landingpageBuildConfig
        .clone()
        .withName('Switch-lp-en-cx-22.0')
        .withPropertiesFilePath('lang-en.js'),
    landingpageBuildConfig
        .clone()
        .withName('Switch-lp-fr-cx-22.0')
        .withPropertiesFilePath('lang-fr.js'),
    landingpageBuildConfig
        .clone()
        .withName('Switch-lp-it-cx-22.0')
        .withPropertiesFilePath('lang-it.js')
);
