export const docs = () => {
  return app.gulp.src(app.path.docs.distFolder)
  .pipe(app.plugins.changed(app.path.docs.docsFolder))
    .pipe(app.gulp.dest(app.path.docs.docsFolder))
}