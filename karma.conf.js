module.exports = function(config) {
    config.set({
        frameworks: ['browserify', 'tap'],
        files: [
            'test/*.js'
        ],
        preprocessors: {
            'test/**/*.js': [ 'browserify' ]
        },
        browsers: ['Chrome'],
        autoWatch: true
    });
};
