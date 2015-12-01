var config = exports.config = {
  baseUrl: 'http://localhost:8005',

  framework: 'jasmine2',

  useAllAngular2AppRoots: true,

  specs: [
    './dist/test/e2e/**/*_spec.js'
  ],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
  },

  multiCapabilities: [{
    browserName: 'chrome',
  }],
}
