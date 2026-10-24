import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // This is a username.github.io repository, so the site is hosted at the domain root.
  base: "/",
  plugins: [react()],
});