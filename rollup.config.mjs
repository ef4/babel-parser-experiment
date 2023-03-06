import babel from '@rollup/plugin-babel';

const config = {
  input: './sample/example.gjs',
  output: {
    dir: 'output',
    format: 'esm'
  },
  plugins: [babel({babelHelpers: 'bundled', extensions: ['.js', '.gjs']})]
};

export default config;