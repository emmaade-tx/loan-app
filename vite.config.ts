import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import viteSvgPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [viteSvgPlugin(), react(), pluginRewriteAll()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
