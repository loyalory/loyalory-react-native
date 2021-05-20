module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@components': './src/components',
          '@entities': './src/entities',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
