import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";

export const html = () => {
      return app.gulp.src(app.path.src.html)
      .pipe(app.plugins.changed(app.path.build.html, { hasChanged: app.plugins.changed.compareContents }))
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
         }))
      )
      .pipe(fileinclude())
      // .pipe(pug({
      //    pretty:true,
      //    verbose: true
      // }))
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      .pipe(app.plugins.if(
         app.isBuild,
         webpHtmlNosvg()
      )
   )
      .pipe(
         app.plugins.if(
            app.isBuild,
            versionNumber({
               'value': '%DT%',
               'append': {
                  'key': '_v',
                  'cover': 0,
                  'to': ['css', 'js', 'img']
               },
               'output': {
                  'file': 'config/version.json'
               }
            })
         )
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream());
}