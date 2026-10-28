import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    prerender: {
      entries: ["*"],
      // A portfolio card without a screenshot is not a broken build: the card
      // component falls back to a gradient tile. Without this handler a missing
      // file in static/previews/ fails `npm run build` during prerender.
      handleHttpError: ({ status, path, message }) => {
        if (status === 404 && path.startsWith("/previews/")) return;
        throw new Error(message);
      },
    },
  },
};

export default config;
