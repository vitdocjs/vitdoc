import { defineConfig } from 'vite'

export default defineConfig(
  // 具体配置项
  {
    template: '@vitdoc/template-mobile',
    docDirs: ["packages/**"],
    logo: '',
    favicon: '',
  }
)
