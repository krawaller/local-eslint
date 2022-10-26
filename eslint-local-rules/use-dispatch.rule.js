/**
 * @type { import('eslint').Rule.RuleModule }
 */
module.exports = {
  create: function (context) {
    return {
      CallExpression: (node) => {
        if (node.callee.name === "useDispatch") {
          context.report({
            message: "Don't use useDispatch directly, moron!",
            node,
          });
          return;
        }
      },
    };
  },
};
