import gulp from "gulp";
import url from "../config/url.js";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import imageMin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpIf from "gulp-if";

export default () => {
    return gulp.src(url.image.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Image",
            message: error.message
        }))
    }))
    .pipe(newer(url.image.dest))
    .pipe(webp())
    .pipe(gulp.dest(url.image.dest))
    .pipe(gulp.src(url.image.src))
    .pipe(newer(url.image.dest))
    .pipe(gulpIf(url.proIs,imageMin({
        verbose: true
    })))
    .pipe(gulp.dest(url.image.dest))
}