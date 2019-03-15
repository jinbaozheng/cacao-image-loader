const compress = require('./compress');

module.exports = function(content, map, meta) {
    const callback = this.async();
    compress(content).then(data => {
        callback(null, data, map, meta);
    }, error => {
        console.error(error.message);
        console.error(`压缩图片失败 - ${this.resourcePath}`);
        callback(error)
        // callback(null, content, map, meta);
    })
};

module.exports.raw = true;
