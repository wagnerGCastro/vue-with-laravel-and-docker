const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
// require('dotenv').config();

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
    // sassOptions: {
    //     quietDeps: true,
    // },
    postCss:[require('autoprefixer'), require('postcss-rtl')]
}).options({
    processCssUrls: false,
    postCss: [ tailwindcss('tailwind.js') ],
})

mix.postCss('resources/assets/css/main.css', 'public/css', [
    tailwindcss('tailwind.js'), 
    require('postcss-rtl')(),
    // require('autoprefixer')(),
])

mix.copy('node_modules/vuesax/dist/vuesax.css', 'public/css/vuesax.css') // Vuesax framework css
    .copy('resources/assets/css/iconfont.css', 'public/css/iconfont.css') // Feather Icon Font css
    .copyDirectory('resources/assets/fonts', 'public/fonts') // Feather Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont', 'public/css/material-icons') // Material Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont/material-icons.css', 'public/css/material-icons/material-icons.css') // Material Icon fonts css
    .copy('node_modules/prismjs/themes/prism-tomorrow.css', 'public/css/prism-tomorrow.css') // Prism Tomorrow theme css
    .copyDirectory('resources/assets/images', 'public/images'); // Copy all images from resources to public folder
        
mix.browserSync({ 
    proxy: "http://localhost:8050",
    port: 8051,
    ui: {
        port: 8052
    },
});

mix.webpackConfig({
    output: {
        chunkFilename: 'js/chunks/[name].js',
    }
});
