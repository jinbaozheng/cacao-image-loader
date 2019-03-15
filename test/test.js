// var assert = require('assert');
// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });
const webpack_config = require('./app/webpack.config');
const webpack = require("webpack");
it('webpack build', function(done) {
    webpack(webpack_config, (err, stats) => {
        if (err || stats.hasErrors()) {
            // console.log(stats);
        }
    });
    done();
});
