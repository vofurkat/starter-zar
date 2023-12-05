const srcUrl = "./app";
const destUrl = "./dist";
const production = process.argv.includes("--production");

export default {
    pro: destUrl,
    proIs: production,

    html: {
        src: srcUrl + "/html/*.html",
        watch: srcUrl + "/html/**/*.html",
        dest: destUrl
    },

    pug: {
        src: srcUrl + "/pug/*.pug",
        watch: srcUrl + "/pug/**/*.pug",
        dest: destUrl
    },

    css: {
        src: srcUrl + "/css/*.css",
        watch: srcUrl + "/css/**/*.css",
        dest: destUrl + "/css"
    },

    scss: {
        src: srcUrl + "/scss/*.{scss,sass}",
        watch: srcUrl + "/scss/**/*.{scss,sass}",
        dest: destUrl + "/css"
    },

    image: {
        src: srcUrl + "/image/*.{jpeg,jpg,png,svg,gif}",
        watch: srcUrl + "/image/**/*.{jpeg,jpg,png,svg,gif}",
        dest: destUrl + "/image"
    },

    font: {
        src: srcUrl + "/fonts/**/*.{ttf,eot,woff,svg,woff2}",
        watch: srcUrl + "/fonts/**/*.{ttf,eot,woff,svg,woff2}",
        dest: destUrl + "/fonts"
    },

    js: {
        src: srcUrl + "/js/*.js",
        watch: srcUrl + "/js/**/*.js",
        dest: destUrl + "/js"
    }

}