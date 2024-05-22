import { defineConfig } from "vite" 

export default {
    build: {
        outDir: 'docs'
    },
    server: {
        host: '172.16.101.146',
        port: 5510
    }
}