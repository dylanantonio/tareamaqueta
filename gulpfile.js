var gulp    = require('gulp'), 
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {

    browserSync.init({
        server: "app",
<<<<<<< HEAD
        port: 1501
=======
        port: 1502
>>>>>>> 408342fd17217199f92c3c013f899b3328b2d48e
    });

    gulp.watch("clase/css/*.css").on('change', browserSync.reload);
    gulp.watch("clase/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);