const pxtorem = require('postcss-pxtorem');

const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssCssnext = require('postcss-cssnext');
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
      selectorBlackList: ['.ignore', '.hairlines', '::before', ':before', '::after', ':after'], // (Array) The selectors to ignore and leave as px. 
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
      mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
    }),
    postcssWriteSvg({
      utf8: false
    }),
    postcssCssnext({}),
    postcssViewportUnits({}),
    cssnano({
      preset: "advanced", 
      autoprefixer: false, 
      "postcss-zindex": false 
    })
  ]
};
