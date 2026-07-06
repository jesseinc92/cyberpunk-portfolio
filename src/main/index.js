import loop from "./loop.js"
import resizeCanvas from "./handleResize.js"
import loadFonts from "../engine/loaders/loadFonts.js"
import loadAssets from "../engine/loaders/loadAssets.js"
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
        loadAssets({ renderer, assets: [
            { type: 'image', path: './static/assets/opening/03building.png', meta: 'opening' },
            { type: 'image', path: './static/assets/opening/02building.png', meta: 'opening' }, 
            { type: 'image', path: './static/assets/opening/01building.png', meta: 'opening' },
            { type: 'spritesheet', path: './static/assets/interiors/room/12.png', meta: 'room_one' },
            { type: 'spritesheet', path: './static/assets/interiors/room/18.png', meta: 'room_two' },
            { type: 'spritesheet', path: './static/assets/interiors/room/19.png', meta: 'room_three' },
            { type: 'spritesheet', path: './static/assets/misc/ruin.png', meta: 'ruin' }
        ] })
    ])

    /** Begin gameplay loop */
    resizeCanvas({ canvas, ctx })
    loop({ renderer, canvas, ctx })
})

/** Handle viewport resize */
window.addEventListener("resize", () => {
    const canvas = document.querySelector('.cyberscape')
    const ctx = canvas.getContext("2d")
    resizeCanvas({ canvas, ctx })
    // loop({ renderer, canvas, ctx })
})