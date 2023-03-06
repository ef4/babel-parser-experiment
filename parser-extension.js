const parser = require("@ef4/glimmer-babel-parser");

module.exports = function main(babel) {
  return {
    name: "parser-extension",
    parserOverride(code, opts) {
      return parser.parse(code, opts);
    },
    manipulateOptions(opts, parserOpts) {
      const { plugins } = parserOpts;
      plugins.push("glimmer");
    },
    visitor: {
      // This is a hack. We've extended the parser so it emits custom
      // GlimmerTemplate nodes. But @babel/core itself is vanilla and doesn't
      // know about those. It would therefore complain and crash when it sees
      // GlimmerTemplate() on our visitor. But if it thinks we've already been
      // validated, we sneak on past.
      //
      // This needs to be truthy, and it also needs to sneak *itself* past
      // validation so it can't be a boolean. Objects are legal though.
      _verified: {},

      GlimmerTemplate(path) {
        path.replaceWith(babel.types.stringLiteral(path.node.content));
      },
    },
  };
};
