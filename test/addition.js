var test = require('tape'),
    addition = require('../src/addition.js');

test('addition', function(t) {
    t.equal(addition(1, 1), 2);
    t.end();
});
