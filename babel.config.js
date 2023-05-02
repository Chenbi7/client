module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo',
      'module:metro-react-native-babel-preset'],
    plugins: ['react-native-reanimated/plugin'],
    env: {
      development : {
        compact: false
      },
      production: {
        compact: false,
        plugins: ['react-native-paper/babel'],
      },
    }
  };
};