import loop from "./loop.js"
import resizeCanvas from "./handleResize.js"
import loadFonts from "../engine/loadFonts.js"
import loadAssets from "../engine/loadAssets.js"
import Renderer from "../engine/renderer.js"

/** Handle canvas setup */
window.addEventListener('DOMContentLoaded', async () => {
    const canvas = document.querySelector('.cyberscape')
    const ctx = canvas.getContext("2d")
    ctx.imageSmoothingEnabled = false

    const renderer = new Renderer({ canvas, ctx })

    /** Load all fonts and assets */
    await Promise.allSettled([
        loadFonts([
            'nerdropol', 
            'toxigenesis'
        ]),
        loadAssets({ renderer, paths: [
            './static/assets/opening/02building.png', 
            './static/assets/opening/01building.png', 
        ] })
    ])

    console.log('index renderer: ', renderer)

    /** Begin gameplay loop */
    resizeCanvas({ canvas, ctx })
    loop({ renderer, canvas, ctx })
})

/** Handle viewport resize */
window.addEventListener("resize", () => {
    const canvas = document.querySelector('.cyberscape')
    const ctx = canvas.getContext("2d")
    resizeCanvas({ canvas, ctx })
})