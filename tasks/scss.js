import gulp from "gulp";
import url from "../config/url.js";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import size from "gulp-size";
import mediaCss from "gulp-group-css-media-queries";
import gulpSass from "gulp-sass";
import nodeSass from "sass";
import gulpSassGlob from "gulp-sass-glob";
import gulpWebp from "gulp-webp-css";
const sass = gulpSass(nodeSass);

export default () => {
    return gulp.src(url.scss.src)
    .pipe(gulpSassGlob())
    .pipe(sass())
    .pipe(gulpWebp())
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Scss",
            message: error.message
        }))
    }))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(mediaCss())
    .pipe(size({
        title: "main.css"
    }))
    .pipe(gulp.dest(url.css.dest))
    .pipe(csso())
    .pipe(size({
        title: "main.min.css"
    }))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(url.scss.dest))
}