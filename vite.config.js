import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default {
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@routes', replacement: '/src/routes' },
      { find: '@components', replacement: '/src/components' },
      { find: '@common', replacement: '/src/components/common' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@styles', replacement: '/src/styles' },
      // Add more aliases as needed
    ],
  },
};