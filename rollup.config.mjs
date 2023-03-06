import babel from '@rollup/plugin-babel';

const config = {
  input: './sample/simple.js',
  output: {
    dir: 'output',
    format: 'esm'
  },
  plugins: [babel()]
};

export default config;