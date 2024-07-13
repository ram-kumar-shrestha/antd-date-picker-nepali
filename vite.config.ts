import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "antd-nepali-date-picker",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "antd", "dayjs"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          dayjs: "dayjs",
          antd: "antd",
          "nepali-date-converter": "nepali-date-converter",
        },
      },
    },
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: true,
  },

  plugins: [react(), dts()],
});
