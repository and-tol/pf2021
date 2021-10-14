// Localized routing
module.exports = {
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    // localePath: path.resolve('./public/static/locales'),
  },
};

// Ability to use svg as components
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};
