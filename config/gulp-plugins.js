import replace from "gulp-replace";
import notify from "gulp-notify";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

import changed from "gulp-changed";

export const plugins = {
   replace: replace,
   plumber: plumber,
   notify: notify,
   browserSync: browserSync,
   newer: newer,
   if: ifPlugin,
   
   changed: changed
}