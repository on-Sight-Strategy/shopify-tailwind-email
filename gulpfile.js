'use strict'

const gulp = require('gulp')
const path = require('path')
const exec = require('gulp-exec')
var newy = require('gulp-newy')

gulp.task('mailwind', () => {
  var options = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false, // default = false, true means stdout is written to file.contents
  };
  return gulp.src('src/**/**/*.liquid')
    .pipe(newy(function (projectDir, srcFile, absSrcFile) {
      var destinationFile = absSrcFile.replace("src", "views")
      return destinationFile
    }))
    .pipe(exec(file => {
      var originalFile = file.path
      var destinationFile = file.path.replace("src", "views")
      return `mailwind --input-html ${originalFile}  --output-html ${destinationFile}`
    }, options))
})

gulp.task('watch:css', () => {
  return gulp.watch('src/**/**/*.liquid', gulp.series('mailwind'))
})