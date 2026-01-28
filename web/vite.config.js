import path from 'node:path'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
    server: {
        // open: true,                                                     /// start qilinsa birdan web ochiladi
        host: true,                                                        /// port qilib beradi
        port: 5173,                                                        /// front uchun port
    },
    build: {
        target: 'esnext',
        chunkSizeWarningLimit: 1024,
    },
    resolve: {
        alias: {                                                          /// import qilishni osonlashtirish uchun
            '@app': path.resolve(__dirname, './src/app'),
            '@css': path.resolve(__dirname, './src/css'),
            '@lib': path.resolve(__dirname, './src/library'),
        },
    },
    plugins: [
        eslintPlugin(),
    ]
})