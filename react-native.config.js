module.exports = {
  dependencies: {
    '@callstack/liquid-glass': {
      platforms: {
        ios: null, // prevent duplicate iOS linking
      },
    },
  },
};
