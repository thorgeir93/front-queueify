module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,       //reload on the fly
        host: '0.0.0.0',    // make available on local network
        port: 3333,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exlude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'] 
                }
            }   
        ] 
        
    }
    
}
