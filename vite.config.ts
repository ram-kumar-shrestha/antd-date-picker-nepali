import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "antd-date-picker-nepali",
      fileName: (format) => {
        if (format === "cjs") return "index.cjs";
        return `index.${format}.js`;
      },
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "antd",
        "dayjs",
        "@ant-design/icons",
        "classnames",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          dayjs: "dayjs",
          antd: "antd",
          "@ant-design/icons": "AntdIcons",
          classnames: "classNames",
        },
        manualChunks: undefined,
        minifyInternalExports: true,
      },
    },
    outDir: "dist",
    sourcemap: false,
    emptyOutDir: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          "console.log",
          "console.info",
          "console.debug",
          "console.warn",
        ],
      },
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },
  plugins: [react(), dts()],
  optimizeDeps: {
    include: ["react", "react-dom", "antd", "dayjs"],
  },
});
