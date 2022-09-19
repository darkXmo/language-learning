import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, join } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "public/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
    AutoImport({
      imports: [
        // 全局引入vue默认导出的所有api，例如ref
        "vue",
        // 全局引入vue-router默认导出的所有api，例如useRouter
        "vue-router",
      ],
      // 全局引入element-plus默认导出的所有api，例如ElMessage
      resolvers: [AntDesignVueResolver()],
      // 生成的声明文件的位置
      dts: "src/auto-imports.d.ts",
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // 全局自动引入了 Element-Plus 的组件，当在Vue文件中使用 <El-Button></El-Button> 的时候，
      // 就会自动注册 El-Button 的TS声明
      resolvers: [AntDesignVueResolver()],
      // 自动引入了`src/components`文件夹中的组件
      dts: "src/components.d.ts",
    }),
  ],
  resolve: {
    // 设置别名 src => @
    // 注意：在tsconfig.json和本文件中都要设置
    alias: {
      "@": resolve(join(__dirname, "src")),
      "@m": resolve(join(__dirname, "src/modules")),
      "@c": resolve(join(__dirname, "src/components")),
      "@a": resolve(join(__dirname, "src/apis")),
    },
  },
});
