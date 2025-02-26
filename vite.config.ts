import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const environment = loadEnv(env.mode, process.cwd(), '')

  return ({
    plugins: [
      vue(),
      vueDevTools(),
      Icons(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      __SUPABASE_URL__: JSON.stringify(environment.SUPABASE_URL),
      __SUPABASE_ANON_KEY__: JSON.stringify(environment.SUPABASE_ANON_KEY),
      __SUPABASE_PROJECT_ID__: JSON.stringify(environment.SUPABASE_PROJECT_ID),
    },
  })
})
