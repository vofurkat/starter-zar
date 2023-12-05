import gulp from "gulp";
import url from "../config/url.js";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulPug from "gulp-pug";
import gulpWebp from "gulp-webp-html";

export default () =>{
    return gulp.src(url.pug.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Pug",
            message: error.message
        }))
    }))
    .pipe(gulPug({
        pretty: true
    }))
    .pipe(gulpWebp())
    .pipe(gulp.dest(url.pug.dest))
}