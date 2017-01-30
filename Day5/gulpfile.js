var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
    browserSync.init({
        server: {
            baseDir: './'
        },
        files: ['*.css', '*.html']
    });
});
proxy: {
	target: "http://www.cbp-exercises.local"

},
open: 'external',
host: 'www.cbp-exercises.local'
port: ../3000,
files: [
'**/*.css'
'**/*.html'

] // watch for changes all files named anything.css and anything.html in//