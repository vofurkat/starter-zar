import gulp from "gulp";
import url from "../config/url.js";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import woff2 from "gulp-ttf2woff2";

export default () =>{
    return gulp.src(url.font.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Font",
            message: error.message
        }))
    }))
    .pipe(newer(url.font.dest))
    .pipe(fonter({
        formats: ["ttf","eot","woff","svg"]
    }))
    .pipe(gulp.dest(url.font.dest))
    .pipe(newer(url.font.dest))
    .pipe(woff2())
    .pipe(gulp.dest(url.font.dest))
}