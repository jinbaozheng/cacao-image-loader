const path = require('path');
const cacaoImageLoader = require('../../index');

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    mode: 'development',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'test.js',
    },
    resolveLoader: {
        alias: {
            "cacao-image-loader": path.join(__dirname, '../../index')
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            },
                            publicPath: function () { /* omitted long function */ }
                        }
                    },
                    {
                        loader: 'cacao-image-loader'
                    }
                ]
            }
        ]
    }
}
