import loop from "./loop.js"
import config from "../config/config.js"
import resizeCanvas from "../engine/handleResize.js"
import loadFonts from "../engine/loaders/loadFonts.js"
import loadAssets from "../engine/loaders/loadAssets.js"
import Renderer from "../engine/renderer.js"
import handleKeyDown from "../engine/handleKeyDown.js"
import handleKeyUp from "../engine/handleKeyUp.js"
import Character from "../engine/character/character.js"
import throttle from "../utils/throttle.js"
import drawBackground from "./drawBackground.js"
import state from "../config/state.js"
import setDprOnDupeCanvas from "../utils/setDprOnDupeCanvas.js"

/** Handle canvas setup */
window.addEventListener('DOMContentLoaded', async () => {
    const canvas = document.querySelector('.cyberscape')
    const ctx = canvas.getContext("2d")
    ctx.imageSmoothingEnabled = false

    const renderer = new Renderer({ canvas, ctx })

    /** Load all fonts and assets */
    await Promise.allSettled([
        loadFonts([
            { font: 'nerdropol', type: 'otf' },
            { font: 'toxigenesis', type: 'otf' },
            { font: 'vt323', type: 'ttf' }
        ]),
        loadAssets({ renderer, assets: [
            { type: 'image', path: './static/assets/opening/03building.png', meta: 'opening' },
            { type: 'image', path: './static/assets/opening/02building.png', meta: 'opening' }, 
            { type: 'image', path: './static/assets/opening/01building.png', meta: 'opening' },
            { type: 'spritesheet', path: './static/assets/interiors/room/12.png', meta: 'room_one' },
            { type: 'spritesheet', path: './static/assets/interiors/room/18.png', meta: 'room_two' },
            { type: 'spritesheet', path: './static/assets/interiors/room/19.png', meta: 'room_three' },
            { type: 'spritesheet', path: './static/assets/interiors/room/20.png', meta: 'room_four' },
            { type: 'spritesheet', path: './static/assets/interiors/room/15.png', meta: 'room_five' },
            { type: 'spritesheet', path: './static/assets/misc/ruin.png', meta: 'ruin' },
            { type: 'spritesheet', path: './static/assets/characters/heromasc1c.png', meta: 'masc_hero' },
            { type: 'spritesheet', path: './static/assets/characters/herofem3a.png', meta: 'fem_hero' },
        ] })
    ])

    /** Pre-draw all backgrounds (i.e. gradients) */
    state.openingBg = drawBackground({
        colors: config.palette.opening.gradient,
        dither: true,
        preRender: true,
        preCanvas: canvas
    })

    /** Register new character and movement functions */
    const character = new Character({ renderer, atlas: 'masc_hero' })

    const walkLeft = throttle(character.walkLeft(), 100)
    const walkUp = throttle(character.walkUp(), 100)
    const walkRight = throttle(character.walkRight(), 100)
    const walkDown = throttle(character.walkDown(), 100)

    /** Handle keyboard controls */
    window.addEventListener("keydown", (e) => handleKeyDown({ e, walkLeft, walkUp, walkRight, walkDown }))
    window.addEventListener("keyup", (e) => handleKeyUp({ e, character, state }))
    
    /** Begin gameplay loop */
    resizeCanvas({ canvas, ctx })
    loop({ renderer, character, canvas, ctx })
})

/** Handle viewport resize */
window.addEventListener("resize", () => {
    const canvas = document.querySelector('.cyberscape')
    const ctx = canvas.getContext("2d")
    resizeCanvas({ canvas, ctx })
    // loop({ renderer, canvas, ctx })
})