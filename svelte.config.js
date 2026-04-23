import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      // Replace 'your-repo-name' with your actual GitHub repository name
      base:
        process.env.NODE_ENV === "production" ? "/hannah-personal-site" : "",
    },
  },
};

export default config;
