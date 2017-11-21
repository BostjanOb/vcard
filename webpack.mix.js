const { mix } = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const glob = require('glob-all')
const purgeCss = require('purgecss-webpack-plugin')

mix.options({ processCssUrls: false })
	.sass('src/app.scss', 'public')
	.options({
		postCss: [
			tailwindcss('tailwind.js'),
		]
	});

if (mix.inProduction()) {
	mix.webpackConfig({
		plugins: [
		  new purgeCss({
			paths: glob.sync([
			  path.join(__dirname, 'public/index.html')
			]),
			extractors: [
			  {
				extractor: class {
				  static extract(content) {
					return content.match(/[A-z0-9-:\/]+/g);
				  }
				},
				extensions: ['html']
			  }
			]
		  })
	]});
}