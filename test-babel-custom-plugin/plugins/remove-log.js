// https://astexplorer.net/ 를 참고해서 만들면 됩니다

module.exports = function ({ types: t }) {
  return {
    visitor: {
      ExpressionStatement(path) {
        if (t.isCallExpression(path.node.expression)) {
          if (t.isMemberExpression(path.node.expression.callee)) {
            const memberExp = path.node.expression.callee;
            if (
              memberExp.object.name === "console" &&
              memberExp.property.name === "log"
            ) {
              path.remove();
            }
          }
        }
      },
    },
  };
};
