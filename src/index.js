import loop from "./game/loop.js"
import resizeCanvas from "./game/handleResize.js"

/** Handle canvas setup */
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.cyberscape')
    const ctx = canvas.getContext("2d")

    resizeCanvas({ canvas, ctx })
    loop({ canvas, ctx })
})

/** Handle viewport resize */
window.addEventListener("resize", () => {
    const canvas = document.querySelector('.cyberscape')
    const ctx = canvas.getContext("2d")
    resizeCanvas({ canvas, ctx })
})