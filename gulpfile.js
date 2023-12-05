import gulp from "gulp";
import browserSync from "browser-sync";

// include url
import url from "./config/url.js";

// include tasks
import clear from "./tasks/clear.js";
import pug from "./tasks/pug.js";
import scss from "./tasks/scss.js";
import image from "./tasks/image.js";
import font from "./tasks/font.js";
import js from "./tasks/script.js";

const watching = () => {
    gulp.watch(url.pug.watch, pug).on('all', browserSync.reload);
    gulp.watch(url.scss.watch, scss).on('all', browserSync.reload);
    gulp.watch(url.image.watch, image).on('all', browserSync.reload);
    gulp.watch(url.font.watch, font).on('all', browserSync.reload);
    gulp.watch(url.js.watch, js).on('all', browserSync.reload);
}

const server = () =>{
    browserSync.init({
        server: {
            baseDir: url.pro
        }
    })
}

const start = gulp.series(
    clear,
    gulp.parallel(pug, scss, image, font, js),
    gulp.parallel(watching,server)
);

const finish = gulp.series(
    clear,
    gulp.parallel(pug, scss, image, font, js)
);

export default url.proIs
    ? finish
    : start;