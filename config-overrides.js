let paths = require('react-scripts/config/paths')
let path = require('path')
let customize = require('customize-cra')

// Top-level source
paths.appSrc = __dirname
paths.appIndexJs = path.resolve(__dirname, 'pages/index.tsx')
paths.appTypeDeclarations = path.resolve(__dirname, 'global.d.ts')

module.exports = customize.override(
  customize.disableEsLint(),
  customize.addBabelPlugin('styled-jsx/babel')
)
