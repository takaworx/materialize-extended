let mix = require('laravel-mix');

mix.options({
    publicPath: 'public',
});

mix.js('src/js/vue-materialize.js', 'public/js')
   .sass('src/sass/vue-materialize.scss', 'public/css');

if (mix.inProduction()) {
   mix.version();
}
