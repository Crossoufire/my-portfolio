import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
    site: "https://crossoufire.github.io",
    base: "/my-portfolio",
    vite: {
        plugins: [tailwindcss()],
    },
});
