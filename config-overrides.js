const path = require('path');
const {
    override,
    addPostcssPlugins
} = require('customize-cra');
module.exports = {
    paths: function (paths, env) {
        paths.appSrc     = path.resolve(__dirname, 'src/main/react');
        paths.appIndexJs = path.resolve(__dirname, 'src/main/react/index.js');
        paths.appPublic  = path.resolve(__dirname, 'src/main/resources/public');
        paths.appHtml    = path.resolve(__dirname, 'src/main/resources/public/index.html');
        paths.appBuild   = path.resolve(__dirname, 'target/classes/public');
        return paths;
    },
    webpack: override(
        addPostcssPlugins([
            require('tailwindcss'),
            require('autoprefixer')
        ])
    )
}