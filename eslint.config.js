// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/explicit-function-return-type": ["off"],
      "@typescript-eslint/no-explicit-any": ["warn"],
      "@angular-eslint/no-empty-lifecycle-method": ["error"],
      "@typescript-eslint/typedef": [
        "error",
        {
          propertyDeclaration: true, // Require types on class properties
          memberVariableDeclaration: true, // Require types on member variables
          variableDeclaration: false, // Optional for local variables
          parameter: true, // Require types on parameters
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/click-events-have-key-events": ["off"],
      "@angular-eslint/template/interactive-supports-focus": ["off"],
    },
  },
);
