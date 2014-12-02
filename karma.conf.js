module.exports = function(config) {
    config.set({
        frameworks: ['browserify', 'tape'],
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
