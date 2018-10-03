let mix = require('laravel-mix');

mix.options({
    publicPath: 'public',
});

mix.js('src/js/materialize-extended.js', 'public/js')
   .sass('src/sass/materialize-extended.scss', 'public/css');

if (mix.inProduction()) {
   mix.version();
}
