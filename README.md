1. 命令行创建npm的配置文件
  a. npm init
  b. npm init --yes 默认配置
2. 添加一个gulp的依赖
  npm install gulp --save-dev
  开发需要的 -dev
3. 在项目根目录下添加一个gulpfile.js文件，这个是gulp的主文件，这个文件名是固定的
4. 在gulpfile中抽象我们需要做的任务
5.LESS编译   依赖 npm install gulp-less  --save-dev
  LESSd合并  依赖 npm install gulp-cssnano  --save-dev
6.JS合并     依赖 npm install gulp-concat  --save-dev
  JS压缩混淆 依赖 npm install gulp-uglify  --save-dev
7.html压缩   依赖 npm install gulp-htmlmin  --save-dev
8.自动化部署，快速响应 npm install browser-sync --save