const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // '@primary-color': '#1DA57A',
              // '@border-color-base': '#d9d9d9',
              '@radio-border-width': '3px',
              '@radio-size': '20px',
              // '@radio-dot-size': '20px',
              '@radio-wrapper-margin-right': '0px',
              // '@radio-top': '0.5em',
              // '@radio-border-color': '@primary-color',
              // '@radio-solid-checked-color': '@primary-color',
              // '@select-border-color': '@primary-color',
              '@btn-default-border': 'hsv(0, 0, 85%)', //
              '@btn-disable-border': 'hsv(0, 0, 85%)', //
              // '@input-border-color': '@primary-color',
              // '@input-number-handler-border-color': '@primary-color',
              '@border-color-base': '@primary-color',
              // '@radio-dot-disabled-color': '@primary-color',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};