const rule = require("./use-dispatch.rule");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const expectedError = {
  message: "Don't use useDispatch directly, moron!",
};

ruleTester.run("storm-dispatch", rule, {
  valid: [
    // ok since some other function name
    {
      code: "useStormDispatch()",
    },
    // ok since not calling
    {
      code: `useDispatch;`,
    },
  ],
  invalid: [
    {
      code: "useDispatch()",
      errors: [expectedError],
    },
  ],
});
