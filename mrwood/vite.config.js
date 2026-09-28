import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import path from 'path'
import fs from 'fs'

// SINGLE_FILE=1 builds one self-contained index.html (used for quick sharing/preview).
const single = process.env.SINGLE_FILE === '1'

// Plugin to serve /imgs from the local imgs/ directory
function serveImgs() {
  const imgsDir = path.resolve(__dirname, 'imgs')
  return {
    name: 'serve-imgs',
    configureServer(server) {
      server.middlewares.use('/imgs', (req, res, next) => {
        const filePath = path.join(imgsDir, req.url)
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          res.setHeader('Content-Type', 'image/jpeg')
          fs.createReadStream(filePath).pipe(res)
        } else {
          next()
        }
      })
    }
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), serveImgs(), ...(single ? [viteSingleFile()] : [])],
})
