import reactRefresh from '@vitejs/plugin-react-refresh';
import tsConfigPath from 'vite-tsconfig-paths';
import styleImport from 'vite-plugin-style-import';
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const postcssConfig = {};

const config = {
  webpack: {
    plugins: [new AntdDayjsWebpackPlugin()],
  },
  jsx: 'react',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    reactRefresh(),
    tsConfigPath(),
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  silent: false,
  base: '/',
};
export default config;
