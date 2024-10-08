/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@zzavidd/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['**/tsconfig.json'],
  },
};
