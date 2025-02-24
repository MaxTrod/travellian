
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;
const docsFolder = `./docs`;

export const path = {
    docs: {
      distFolder: `${buildFolder}/**/*.*`,
      docsFolder: `${docsFolder}/`
    },
   build: {
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`
   },
   src: {
      js: `${srcFolder}/js/app.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      svgicons: `${srcFolder}/svgicons/*.svg`,
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
      files: `${srcFolder}/files/**/*.*`
   },
   clean: buildFolder,
   cleanDocs: docsFolder,
   buildFolder: buildFolder,
   rootFolder: rootFolder,
   srcFolder: srcFolder,
   docsFolder: docsFolder,
   ftp: `domains/devasmikas.ru/public_html`
};


export const configFTP = {
	host: "141.8.192.217", 
	user: "a0944396", 
	password: "upibadpuri", 
	parallel: 5  
}