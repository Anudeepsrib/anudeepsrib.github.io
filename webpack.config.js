import { resolve } from 'path';

/** @type {import('webpack').Configuration} */
const config = {
  resolve: {
    alias: {
      'fs/promises': resolve('node_modules/fs/promises'),
    },
    fallback: {
      fs: false,
    },
  },
};

export default config;
