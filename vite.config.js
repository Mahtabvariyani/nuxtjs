// vite.config.js
import Vue from '@vitejs/plugin-vue';

export default {
  plugins: [Vue()],
  server: {
    hmr: {
      overlay: false,
    },
  },
};
