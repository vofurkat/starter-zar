import gulp from "gulp";
import url from "../config/url.js";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import contact from "gulp-concat";
import cssImport from "gulp-cssimport";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import size from "gulp-size";
import mediaCss from "gulp-group-css-media-queries";
import gulpWebp from "gulp-webp-css";

export default () =>{
    return gulp.src(url.css.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Css",
            message: error.message
        }))
    }))
    .pipe(contact("style.css"))
    .pipe(gulpWebp())
    .pipe(cssImport())
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
    .pipe(gulp.dest(url.css.dest))
}