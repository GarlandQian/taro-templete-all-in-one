import type { UserConfigExport } from '@tarojs/cli'
import TerserPlugin from 'terser-webpack-plugin'

export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {
    webpackChain: (chain, webpack) => {
      chain.optimization.minimize(true)
      chain.optimization.minimizer('minifyMainPackage').use(TerserPlugin, [
        {
          parallel: true,
          terserOptions: {
            compress: true, // 默认使用terser压缩
            // mangle: false,
            keep_classnames: true, // 不改变class名称
            keep_fnames: true, // 不改变函数名称
          },
        },
      ])
    },
  },
  h5: {},
} satisfies UserConfigExport<'webpack5'>
