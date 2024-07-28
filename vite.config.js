import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

// https://vitejs.dev/config/

dotenv.config();

export default defineConfig({
  plugins: [react()],
  base: "/movie-finder/",
  define: {
    "process.env": {
      REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
      REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    },
  },
});
