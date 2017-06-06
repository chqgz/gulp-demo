'use strict';
/**
 * 1. LESS编译 压缩 合并
 * 2. JS合并 压缩 混淆
 * 3. img复制
 * 4. html压缩
 */
const gulp = require('gulp');
const less = require('gulp-less');
const cssnano = require('gulp-cssnano');

const browser = require('browser-sync');

//LESS编译 压缩 合并
gulp.task('style', () => {
    gulp.src(['src/styles/*.less', '!src/styles/_*.less'])
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/styles'))
        .pipe(browser.reload({ stream: true }));
})

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
//JS合并 压缩 混淆
gulp.task('script',()=>{
    gulp.src('src/scripts/*.js')
        //.pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browser.reload({stream:true}));
})

//img复制
gulp.task('image',()=>{
    gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'))
        .pipe(browser.reload({stream:true}));
})

const htmlmin = require('gulp-htmlmin');
//html压缩
gulp.task('html',()=>{
    gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browser.reload({stream:true}));
})

//启动服务 并且监听所有文件是否修改 修改就重新编译 加载  刷新
gulp.task('server',()=>{
  browser({
    server: {
      baseDir: ['dist']
    },
  }, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
  });

  gulp.watch('src/styles/*.less',['style']);
  gulp.watch('src/scripts/*.js',['script']);
  gulp.watch('src/images/*.*',['image']);
  gulp.watch('src/*.html',['html']);
})

