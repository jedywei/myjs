const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        vendor: ['uuid', 'axios' ]
    }, 
    output: {
        path: path.join(__dirname, 'front/static/js'), 
        filename: '[name]-[contenthash].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin ({
            // path define the location of manifest document
            path: path.join(__dirname, 'front/static', '[name]-manifest.json'),
            // name dll bunle output variable
            name: '[name]_library'
        })
    ]
}
