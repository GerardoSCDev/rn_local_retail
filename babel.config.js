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
            '@home': './src/modules2/home',
            '@inventory': './src/modules2/inventory',
            '@utils': './src/utils',
          }
        }
      ]
    ]
  };
};
