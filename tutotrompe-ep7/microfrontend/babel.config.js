module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: "3.0.0",
        targets: { node: "current" },
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "babel-plugin-styled-components",
  ],
  env: {
    production: {
      plugins: ["transform-react-remove-prop-types"]
    }
  }
}
