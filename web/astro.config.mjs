import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://amendment-atoms.com",
  integrations: [react()],
  output: "static",
});
