const pxtorem = require('postcss-pxtorem');

const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssPresetEnv = require('postcss-preset-env');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');

export default {
  entry: 'src/index.js',
  theme: "./theme.config.js",
  browserslist: [
    '>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie < 9'
  ],
  publicPath: "/", //打包时需要更改成相对路径
  outputPath: "./dist", //打包输出路径
  hash: true,
  disableDynamicImport: false,
  html: {
    template: './src/index.ejs'
  }, //用于将hash文件替换到ejs模板中
  env: {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "@babel/transform-runtime",
        ['import', {
          'libraryName': 'antd-mobile',
          'libraryDirectory': 'lib',
          'style': true
        }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "@babel/transform-runtime",
        ['import', {
          'libraryName': 'antd-mobile',
          'libraryDirectory': 'lib',
          'style': true
        }]
      ]
    }
  },
  extraPostCSSPlugins: [
    postcssAspectRatioMini({}),                   
    postcssPxToViewport({ 
      viewportWidth: 750, // (Number) The width of the viewport. 
      viewportHeight: 1334, // (Number) The height of the viewport. 
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
      viewportUnit: 'vw', // (String) Expected units. 
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
      mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
    }),
    postcssWriteSvg({
      utf8: false
    }),
    postcssPresetEnv({}),
    postcssViewportUnits({
      filterRule: rule => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1 && rule.selector.indexOf(':after') === -1 && rule.selector.indexOf(':before') === -1
    }),
    // preset: "advanced", 
    cssnano({
      autoprefixer: false, 
      "postcss-zindex": false 
    })
  ]
};
