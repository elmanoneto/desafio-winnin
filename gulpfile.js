var gulp        = require('gulp'),
    browserSync = require('browser-sync');


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./**/*").on('change', browserSync.reload);
    gulp.watch("./views/*").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
