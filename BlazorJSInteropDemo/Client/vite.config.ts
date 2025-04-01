import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: 'src/site.ts',          // 진입점 파일
            formats: ['es'],               // ES 모듈로 출력
            fileName: () => 'blazor-interop.js'      // 고정 파일명
        },
        rollupOptions: {
            output: {
                exports: 'named',           // named exports 유지
            }
        },
        minify: true,       
        outDir: '../wwwroot/js/dist',
        emptyOutDir: false 
    }
})
