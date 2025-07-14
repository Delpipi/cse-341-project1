import js from "@eslint/js";
import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc"
import { defineConfig } from "eslint/config";
import path from "path";

//Create a compat instance
const compat = new FlatCompat({
  baseDirectory: path.resolve(),
});

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      sourceType: "commonjs",
    },
    plugins: {
      js,
    },
    extends: [
      "js/recommended"
    ],
    rules: {
      "import/no-unresolved": "error",
    },
  },
  ...compat.extends("airbnb-base"),
  ...compat.extends("prettier"),
]);
