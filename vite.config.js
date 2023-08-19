import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@utils', replacement: '/src/utils' },
      // Add more aliases as needed
    ],
  },
};