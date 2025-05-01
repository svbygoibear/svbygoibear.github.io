import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/"
    // build: {
    //     rollupOptions: {
    //         input: {
    //             main: "index.html"
    //         },
    //         output: {
    //             assetFileNames: assetInfo => {
    //                 if (assetInfo?.name?.endsWith(".pdf")) {
    //                     return "[name][extname]";
    //                 }
    //                 return "assets/[name]-[hash][extname]";
    //             }
    //         }
    //     }
    // }
});
