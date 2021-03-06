module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      // https://getbootstrap.com/docs/4.6/getting-started/webpack/#importing-styles
      test: /\.scss$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { sourceMap: true } },
        {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            sourceMap: true,
            plugins: function () {
              // postcss plugins, can be exported to postcss.config.js
              return [require('autoprefixer')];
            },
          },
        },
        { loader: 'sass-loader', options: { sourceMap: true } },
      ],
    });

    // Return the altered config
    return config;
  },
};
