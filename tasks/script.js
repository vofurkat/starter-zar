import gulp from "gulp";
import url from "../config/url.js";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import rename from "gulp-rename";

export default () =>{
    return gulp.src(url.js.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Js",
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(url.js.dest))
}
