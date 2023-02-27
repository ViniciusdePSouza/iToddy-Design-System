/// <reference types="vite/client"/>

import react from '@vitejs/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
})