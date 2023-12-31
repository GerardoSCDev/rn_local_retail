module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@home': './src/modules/home',
            '@inventory': './src/modules/inventory',
            '@utils': './src/utils',
          }
        }
      ]
    ]
  };
};
