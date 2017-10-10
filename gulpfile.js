/**
 * NOTE:
 *
 * Mostly just using gulp for image processing. Webpack-loaders make
 * it difficult to produce multiple file of multiple formats (and reference
 * said files in the DOM)
 */

const gulp = require('gulp')
const del = require('del')
/** Generic */
const rename = require('gulp-rename')
const clone = require('gulp-clone')
const filter = require('gulp-filter')
const cache = require('gulp-cache')
/** Image processing */
const responsive = require('gulp-responsive')
const webp = require('gulp-webp')
/** Imagemin */
const imagemin = require('gulp-imagemin')
const imageminPngquant = require('imagemin-pngquant')
const imageminZopfli = require('imagemin-zopfli')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminGiflossy = require('imagemin-giflossy')

var config = {
  images: {
    srcDir: 'images/**/*',
    tempDir: 'temp/images/',
    destDir: 'assets/images/'
  }
}

var cloneSink = clone.sink()

var homeCache = new cache.Cache({
  tmpDir: './',
  cacheDirName: 'gulp-cache'
})

gulp.task('checkNewImages', ['cleanTemp'], function () {
  return gulp.src(config.images.srcDir)
  .pipe(cache(gulp.dest(config.images.tempDir), { fileCache: homeCache }))
})

gulp.task('cleanTemp', function () {
  del([config.images.tempDir])
})

gulp.task('cleanDest', function () {
  del([config.images.destDir])
})

gulp.task('clear', ['cleanTemp', 'cleanDest'], function (done) {
  homeCache.clear(null, done)
})

gulp.task('images', ['checkNewImages'], function () {
  /** Create a filter to remove .gifs and .svgs from the stream */
  const f1 = filter(['**/*', '!**/*.gif', '!**/*.svg'], {restore: true})
  /** Create a filter to remove .webp from the stream */
  const f2 = filter(['**/*', '!**/*.webp'], {restore: true})
  /** Define task source */
  return gulp.src(config.images.tempDir + '**/*')
    .pipe(rename(function (path) {
      path.dirname = path.basename + path.extname
    }))
    /** Apply gif / svg filter */
    .pipe(f1)
    .pipe(responsive({
      '**/*': [
        {
          rename: { basename: 'original' }
        },
        {
          width: 100,
          blur: true,
          quality: 5,
          rename: { basename: 'placeholder' }
        },
        {
          width: 600,
          rename: { basename: '600px' }
        },
        {
          width: 900,
          rename: { basename: '900px' }
        },
        {
          width: 1400,
          rename: { basename: '1400px' }
        }
      ]},
      /** Process all files in this stream with the settings below */
      {
        quality: 100,
        compressionLevel: 0,
        progressive: false,
        withoutAdaptiveFiltering: true,
        withMetadata: false,
        withoutEnlargement: true,
        skipOnEnlargement: false,
        errorOnEnlargement: false
      }
    ))
    /** Clone image */
    .pipe(cloneSink)
    /** Convert cloned image to WebP */
    .pipe(webp({quality: 80, method: 6, preset: 'photo'}))
    /** Restore original image */
    .pipe(cloneSink.tap())
    /** Filter out the newly created webp */
    .pipe(f2)
    /** Restore the images which were filtered out */
    .pipe(f1.restore)
    /** use imagemin for compression - gulp-responsive seems not to work well */
    .pipe(imagemin([
      imageminPngquant({ speed: 1, quality: 90, floyd: 0.8 }),
      imageminZopfli({ more: true }),
      imageminGiflossy({ optimizationLevel: 3, optimize: 3, lossy: 2 }),
      imagemin.svgo({ plugins: [{ removeViewBox: false }] }),
      imagemin.jpegtran({ progressive: true }),
      imageminMozjpeg({ quality: 90 })
    ]))
    /** Bring back the webp images */
    .pipe(f2.restore)
    /** Output to destination directory */
    .pipe(gulp.dest(config.images.destDir))
})

gulp.task('images:update', ['cleanTemp', 'images'])
gulp.task('images:full', ['clear', 'images'])

gulp.task('default', ['images:update'])
