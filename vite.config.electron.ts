import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron/simple'
import baseConfig from './vite.config'

export default defineConfig(async env => {
  const resolvedBase = typeof baseConfig === 'function' ? await baseConfig(env) : baseConfig
  const electronPlugins = await electron({
    main: {
      entry: 'electron/main.ts'
    },
    renderer: {}
  })

  return {
    ...resolvedBase,
    plugins: [...(resolvedBase.plugins ?? []), ...electronPlugins]
  }
})
