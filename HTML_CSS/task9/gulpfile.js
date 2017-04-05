var gulp = require('gulp');
// 获取 gulp-ruby-sass 模块
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass', function() {
    return sass('src/sass/*.scss')
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('dist/css'))
});
gulp.task('serve', function() {

    browserSync.init({
        browser: "C:/Users/hnsxx/AppData/Local/Google/Chrome/Application/chrome.exe",
        server: "./"
    });
    gulp.watch("dist/css/*.css").on('change', reload);
    gulp.watch("*.html").on('change', reload);
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function() {
    // 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
gulp.task('default', ['sass', 'auto', 'serve'])