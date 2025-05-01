import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: "src/assets/*.json",
                    dest: "assets"
                }
            ]
        })
    ],
    base: "/",
    build: {
        rollupOptions: {
            input: {
                main: "index.html"
            },
            output: {
                assetFileNames: assetInfo => {
                    if (assetInfo?.name?.endsWith(".pdf")) {
                        return "[name][extname]";
                    }
                    return "assets/[name]-[hash][extname]";
                }
            }
        }
    }
});
