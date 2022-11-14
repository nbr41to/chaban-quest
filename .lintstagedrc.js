module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  'src/**/*.{js,ts,jsx,tsx}': [
    'npx eslint --fix',
    'npx prettier --write --ignore-unknown',
  ],
  'pages/**/*.{js,ts,jsx,tsx}': [
    'npx eslint --fix',
    'npx prettier --write --ignore-unknown',
  ],
};
