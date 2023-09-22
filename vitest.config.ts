import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['./src/test/vitest.setup.ts'],
            coverage: {
                provider: 'v8', // or 'istanbul',
                reporter: ['text'],
            },
        },
    })
);
