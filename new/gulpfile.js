// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var uglify = require('gulp-uglify');
var imagemin = require('imagemin');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
 
gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(livereload());
});
 
// Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/js/'));
});

// Minify imagens
gulp.task('img', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/img/'))
);

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/img/*', ['imagemin']);
  	gulp.watch('src/sass/*.scss', ['sass']);
    livereload.listen();
});

// Default Task
gulp.task('default', ['watch']);