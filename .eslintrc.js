'use strict';

const config = {
  root: true,
  env: { commonjs: true, node: true },
  extends: [
    'ackama',
    'ackama/react'
  ],
  ignorePatterns: ["tmp/"],
  parserOptions: { sourceType: "module" },
  overrides: [
    {
        files: ["config/webpack/*",
                "postcss.config.js",
                "babel.config.js",
                ".eslintrc.js"
              ],
        parserOptions: { sourceType: "script" }
    }
  ],
  rules: {}
};

module.exports = config;