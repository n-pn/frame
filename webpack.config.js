const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')
const pkg = require('./package.json')
const config = require('sapper/config/webpack.js')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const alias = {
  svelte: path.resolve(__dirname, 'node_modules', 'svelte'),
  $lib: path.resolve(__dirname, 'lib'),
  $src: path.resolve(__dirname, 'src'),
}

const extensions = ['.mjs', '.js', '.json', '.svelte', '.html']
const mainFields = ['svelte', 'module', 'browser', 'main']

const { preprocess } = require('./svelte.config')

// postcss

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.svelte'],
  keyframes: true,
  whitelistPatterns: [/svelte-/],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

// exports

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader-hot',
            options: {
              dev,
              emitCss: false,
              preprocess,
              hydratable: true,
              hotReload: dev,
              hotOptions: {
                noPreserveState: false,
                optimistic: true,
              },
            },
          },
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: true } },
            !dev && {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  parsers: 'postcss',
                  plugins: ['autoprefixer', 'cssnano', purgecss],
                },
              },
            },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ].filter(Boolean),
        },
      ],
    },
    mode,
    plugins: [
      dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      new MiniCssExtractPlugin({
        filename: '[hash]/[name].css',
        chunkFilename: '[hash]/[name].[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader-hot',
            options: {
              css: false,
              generate: 'ssr',
              hydratable: true,
              dev,
              preprocess,
            },
          },
        },
      ],
    },
    mode,
    performance: { hints: false },
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode,
  },
}
