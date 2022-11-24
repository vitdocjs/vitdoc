import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
  build: {
    target: "esnext",
    minify: false,
    outDir: "dist",
    emptyOutDir: false,
    lib: {
      name: "runtime",
      entry: "./src/runtime.tsx",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
