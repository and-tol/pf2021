module.exports = {
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    // localePath: path.resolve('./public/static/locales'),
  },
};

module.exports = {
  eslint: {
    dirs: ['pages', 'utils', 'components'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

// Ability to use svg as components for new NextJS
module.exports = {
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};
