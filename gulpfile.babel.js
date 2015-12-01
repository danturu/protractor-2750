import cprocess from 'child_process'
import del from 'del'
import gulp from 'gulp';
import connect from 'gulp-connect'
import ts from 'gulp-typescript'

let config = {
  src: '{src,test,typings}',
  dest: 'dist',
}

let tsProject = ts.createProject('tsconfig.json', {
  typescript: require('typescript'),
});

gulp.task('build', () => {
  let tsResult = gulp.src(`${config.src}/**/*.ts`).pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest(config.dest));
})

gulp.task('watch', () =>
  gulp.watch(`${config.src}/**/*.ts`, ['build'])
);

gulp.task('serve', ['build', 'watch'], (done) => {
  connect.server({ port: '8005', root: [__dirname] });
  done();
});
