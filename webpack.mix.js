const { mix } = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.options({ processCssUrls: false })
    .sass('src/app.scss', 'public')
    .options({
        postCss: [
            tailwindcss('tailwind.js'),
        ]
    });