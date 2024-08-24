const CracoAlias = require("craco-alias");
const jestConfig = require('./jest.config.js');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@mui/styled-engine": "./node_modules/@mui/styled-engine-sc",
        },
      },
    },
  ],
  jest: {
    configure: jestConfig,
  },
};
