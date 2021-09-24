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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css', {
        sassOptions: {
            quietDeps: true,
        },
    });
    
mix.browserSync({ 
    proxy: "http://localhost:8050",
    port: 8051,
    ui: {
        port: 8052
    },
});