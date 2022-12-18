module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log(config.output, env, process.env.npm_package_version);
  config.output = {
    ...config.output, // copy all settings
    filename: `static/js/[name]${process.env.npm_package_version}.js`,
    chunkFilename: `static/js/[name]${process.env.npm_package_version}.chunk.js`,
  };
  return config;
};
