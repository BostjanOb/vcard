const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.sass('src/app.scss', 'public')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })
  .purgeCss({
  	paths: [
		path.join(__dirname, 'public/index.html')
    ],
  });