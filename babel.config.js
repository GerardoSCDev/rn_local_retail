module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@modules': './src/modules',
            '@utils': './src/utils',
          }
        }
      ]
    ]
  };
};
