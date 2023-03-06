const parser = require("@babel/parser");

module.exports = function main(babel) {
  return {
    parserOverride(code, opts) {
      return parser.parse(code, opts);
    },
    manipulateOptions(opts, parserOpts) {
      const { plugins } = parserOpts;
      plugins.push("glimmer");
    },
  };
};
