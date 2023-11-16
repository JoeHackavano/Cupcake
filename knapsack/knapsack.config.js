const {
  KnapsackWebComponentRenderer,
} = require("@knapsack/renderer-web-components");
const KnapsackHtmlRenderer = require("@knapsack/renderer-html");
const { KnapsackReactRenderer } = require("@knapsack/renderer-react");
const { configureKnapsack } = require("@knapsack/app");
const { join } = require("path");
const { version } = require("../package.json");

module.exports = configureKnapsack({
  data: join(__dirname, "./data"),
  dist: join(__dirname, "./dist"),
  public: join(__dirname, "./public"),
  version,
  templateRenderers: [
    new KnapsackWebComponentRenderer(),
    new KnapsackHtmlRenderer(),
    new KnapsackReactRenderer({
      webpackConfig: {
        module: {
          rules: [],
        },
      },
    }),
  ],
  plugins: [],
  cloud: {
    siteId: "joecacc",
    repoRoot: join(__dirname, ".."),
  },
});
