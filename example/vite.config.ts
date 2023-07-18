import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    dedupe: ["three"],
  },
  base: "/apfel-kruemel/",
  server: {
    fs: { strict: false },
  },
});
