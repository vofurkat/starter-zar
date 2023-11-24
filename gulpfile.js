const {src, dest, watch, series, parallel} = require("gulp");
const gulpFileInclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();

const html = () =>{
    return src("./app/html/*.html")
    .pipe(gulpFileInclude())
    .pipe(dest("./dist"))
    .pipe(browserSync.stream());
}

const watching = () => {
    watch("./app/html/*.html", html)
}

const server = () =>{
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
}

exports.server = server;
exports.watch = watching;
exports.html = html;

exports.start = series(
    html,
    parallel(watching,server)
);
