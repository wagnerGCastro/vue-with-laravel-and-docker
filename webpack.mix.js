const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack bu,ild steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/src'),
            '@assets': path.resolve(__dirname, 'resources/assets'),
            '@sass': path.resolve(__dirname, 'resources/sass')
        }
    }
});

mix.sass('resources/sass/app.scss', 'public/css', {
    sassOptions: {
        quietDeps: true,
    },
    postCss:[require('autoprefixer'), require('postcss-rtl')]
});
    
mix.browserSync({ 
    proxy: "http://localhost:8050",
    port: 8051,
    ui: {
        port: 8052
    },
});