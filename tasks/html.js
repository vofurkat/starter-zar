import gulp from "gulp";
import url from "../config/url.js";
import gulpFileInclude from "gulp-file-include";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulpWebp from "gulp-webp-html";

export default () =>{
    return gulp.src(url.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Html",
            message: error.message
        }))
    }))
    .pipe(gulpFileInclude())
    .pipe(gulpWebp())
    .pipe(gulp.dest(url.html.dest))
}