const gulp = require("gulp"),
  csso = require("gulp-csso"),
  sass = require("gulp-sass"),
  del = require("del");

gulp.task("css:clean", function() {
  return del("public/*.css", { force: true });
});

gulp.task("assets:clean", function() {
  return del(["public/**/*", "!public/*.css"], { force: true });
});

gulp.task("css:compile", ["css:clean"], function() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(csso())
    .pipe(gulp.dest("public"));
});

gulp.task("assets:copy", ["assets:clean"], function() {
  gulp.src("src/assets/**/*").pipe(gulp.dest("public"));
});

gulp.task("build", ["css:compile", "assets:copy"]);

gulp.task("develop", ["build"], function() {
  gulp.watch("src/scss/*", ["css:compile"]);
  gulp.watch("src/assets/**/*", ["assets:copy"]);
});

gulp.task("watch", function() {
  var watcher = gulp.watch("client/js/*.js");
  watcher.on("change", function(event) {
    console.log("File: " + event.path + "was changed");
  });
});
