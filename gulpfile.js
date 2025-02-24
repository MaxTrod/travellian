import gulp from "gulp";

import { path } from "./config/gulp-settings.js";

import { plugins } from "./config/gulp-plugins.js";

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

import { copy } from "./config/gulp-tasks/copy.js";
import { reset } from "./config/gulp-tasks/reset.js";
import { html } from "./config/gulp-tasks/html.js";
import { server } from "./config/gulp-tasks/server.js";
import { scss } from "./config/gulp-tasks/scss.js";
import { js } from "./config/gulp-tasks/js.js";
import { images } from "./config/gulp-tasks/images.js";
import { otfToTtf, ttfToWoff, fonstStyle } from "./config/gulp-tasks/fonts.js";
import { sprite } from "./config/gulp-tasks/sprite.js";
import { zip } from "./config/gulp-tasks/zip.js";
import { ftp } from "./config/gulp-tasks/ftp.js";
import { docs } from "./config/gulp-tasks/docs.js";
import { gitignore } from "./config/gulp-tasks/gitignore.js";

function watcher () {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html); //gulp.series(html, ftp)
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fonstStyle);

// const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));
const mainTasks = gulp.series(fonts, gulp.parallel(copy, sprite, html, scss, js, images));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server), gitignore);
// const build = gulp.series(reset, mainTasks, gitignore);
const build = gulp.series(reset, mainTasks, docs, gitignore);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev }
export { build }
export { deployZIP }
export { deployFTP }
// export { docs }
// export { sprite }

gulp.task('default', dev);
// gulp.task(reset);