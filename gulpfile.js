const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      minifyCSS    = require('gulp-clean-css'),
      rename       = require('gulp-rename'),
      changed      = require('gulp-changed'),
      autoprefixer = require('gulp-autoprefixer');


const SASS_SRC  = './src/Assets/sass/**/*.sass',
      SASS_DEST = './src/Assets/css';

gulp.task('sass', function() {
    return gulp.src(SASS_SRC)
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min'}))
        .pipe(changed(SASS_DEST))
        .pipe(gulp.dest(SASS_DEST))
});

gulp.task('watch', function () {
   gulp.watch(SASS_SRC, gulp.parallel('sass'))
});


gulp.task('default', gulp.parallel('watch'));