import drawBackground from "./drawBackground.js"
import drawHero from "./drawHero.js"
import drawImage from "../engine/drawImage.js"
import drawUI from "./drawUI.js"
import state from "../config/state.js"

export default function titleScreen({ renderer, canvas, ctx, time }) {
    /**
     * Color background/sky
     */
    renderer.addLayer(drawImage({ img: state.openingBg }))

    /** 
     * Add hero text 
     */
    renderer.addLayer(drawHero({ time: 15000, canvas, ctx }))
    renderer.addLayer(drawUI({ 
        text: 'Start (F)', 
        actionKey: 'f', 
        actionFn: (state) => {
            state.newScene = 'livingRoom'
            state.transitionStart = time
            state.transition = true
            window.sessionStorage.setItem('cyberdevScene', 'livingRoom')
        },
        pos: { x: canvas.clientWidth / 2, y: 2 * canvas.clientHeight / 3 } 
    }))
}