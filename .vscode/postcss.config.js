const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: [
        './public/index.html',       // HTML files
        './src/**/*.js',             // JS files
        './src/**/*.jsx',            // JSX files
        './src/**/*.ts',             // if using TS
        './src/**/*.tsx'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
