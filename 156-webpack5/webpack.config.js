const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const conf = {
    mode: 'development',
    // mode: 'production',
    entry: {
        main: ['/src/index.js'],
    },
    output: {
        path: path.resolve(__dirname, 'front'),
        filename: '[name]-[contenthash].bundle.js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'front')
        },
        port: 9000,
        open: { app: { name: "Google Chrome" } },
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader',]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '156-webpack5',
            filename: 'index.html',
            template: 'src/template.html'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./front/static/vendor-manifest.json')
        })
    ]
};

module.exports = (env, argv) =>  {
    if (env.report)
        conf.plugins.push(new BundleAnalyzerPlugin());
    if (argv.mode === "production")
        conf.mode = 'production';

    console.log('mode:', conf.mode)
    return conf;
};