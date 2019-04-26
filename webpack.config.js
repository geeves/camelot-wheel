const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const MAIN_DIR = path.resolve(__dirname);
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
  entry : {
    "cw" : `${SRC_DIR}/index.js`
  },
  output : {
    path : `${MAIN_DIR}/dist`,
    filename : "[name].js"
  },
  module : {
    rules : [
      {
        test : /\.js?/,
        include : [SRC_DIR],
        loader : "babel-loader"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins : []
};

module.exports = (env, argv) => {
  if ("production" === argv.mode) {
    config.optimization = {
      minimizer : [
        new UglifyJSPlugin({
          uglifyOptions : {
            compress : {
              drop_console : true
            }
          }
        })
      ]
    };
  } else {
    config.devtool = "eval-source-map";
    config.output.filename = "[name]-development.js";
  }
  return config;
};
