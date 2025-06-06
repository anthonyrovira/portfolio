/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss(), svgr(), visualizer()],
    base: "/",
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@/app": path.resolve(__dirname, "src/app"),
        "@/hooks": path.resolve(__dirname, "src/hooks"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/constants": path.resolve(__dirname, "src/constants"),
        "@/contexts": path.resolve(__dirname, "src/contexts"),
        "@/lib": path.resolve(__dirname, "src/lib"),
        "@/pages": path.resolve(__dirname, "src/pages"),
        "@/utils": path.resolve(__dirname, "src/utils"),
        "@/icons": path.resolve(__dirname, "src/icons"),
      },
    },
    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/tests/setup.ts"],
      include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      cssMinify: true,
      manifest: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
        },
        format: {
          comments: false,
        },
      },
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (!id.includes("node_modules")) {
              return;
            }
            if (id.includes("react")) {
              return "vendor-react";
            }
            if (id.includes("firebase")) {
              return "vendor-firebase";
            }
            return "vendor-other";
          },
        },
      },
    },
  };
});
