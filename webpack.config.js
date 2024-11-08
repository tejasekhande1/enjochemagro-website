const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js',  // Entry point for your React app (use the .js file as the entry)
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],  // Ensure Babel is configured for React and modern JS
                    },
                },
            },
            {
                test: /\.jsx$/,  // JSX support for React files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico|woff2?|ttf|eot)$/,  // Add fonts and images
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]',  // Copy assets to dist/assets/
                            publicPath: '/assets/',  // Serve assets from /assets in dev
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],  // Resolve .jsx extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),  // Template for your HTML (using your existing index.html)
            filename: 'index.html',
            inject: 'body',
            // Inject the link to favicon in the HTML head
            favicon: path.resolve(__dirname, 'src/assets/images/favicons/favicon.ico'),
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' },
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),  // Serve from dist folder
        },
        open: true,  // Automatically open the browser on server start
        hot: true,   // Enable hot module replacement
        port: 3000,  // Dev server port
        historyApiFallback: true,
    },
    performance: {
        maxAssetSize: 500000000000,  // Increase the asset size limit
        maxEntrypointSize: 500000000000,  // Increase the entrypoint size limit
    },
    devtool: 'source-map',  // Enable source maps for easier debugging
};
