import { defineConfig } from 'vite'

export default defineConfig(
  // 具体配置项
  {
    template: '@vitdoc/template-mobile',
    docDirs: ["packages/**"],
    logo: '',
    favicon: 'https://img.alicdn.com/imgextra/i3/O1CN01sKWfJ21EBOi2JEFFV_!!6000000000313-2-tps-48-48.png',
  }
)
