// https://astexplorer.net/ 를 참고해서 만들면 됩니다

module.exports = function ({ types: t }) {
  return {
    visitor: {
      FunctionDeclaration(path) {
        if (path.node.id.name.substr(0, 2) === "on") {
          path
            .get("body")
            .unshiftContainer(
              "body",
              t.expressionStatement(
                t.callExpression(
                  t.memberExpression(
                    t.identifier("console"),
                    t.identifier("log")
                  ),
                  [t.stringLiteral(`call ${path.node.id.name}`)]
                )
              )
            );
        }
      },
    },
  };
};
