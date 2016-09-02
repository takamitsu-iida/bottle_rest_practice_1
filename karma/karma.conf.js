// Karma configuration
// Generated on Thu Sep 01 2016 14:18:21 GMT+0900 (東京 (標準時))

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../static/angular-1.5.8/angular.min.js',
      '../static/angular-ui-router-0.2.18/angular-ui-router.min.js',
      '../static/angular-1.5.8/angular-animate.min.js',
      '../static/ui-bootstrap-tpls-1.3.3/ui-bootstrap-tpls-1.3.3.min.js',
      '../static/site/js/iida.startup.js',
      '../static/site/js/iida.main.js',
      // テスト用
      '../static/angular-1.5.8/angular-resource.min.js',
      '../static/angular-1.5.8/angular-mocks.js',
      '../static/angular-1.5.8/angular-sanitize.min.js',
      'spec/*_spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
