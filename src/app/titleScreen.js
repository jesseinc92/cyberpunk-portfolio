import drawBackground from "./drawBackground.js"
import drawHero from "./drawHero.js"
import drawImage from "../engine/drawImage.js"
import drawUI from "./drawUI.js"
import state from "../config/state.js"

export default function titleScreen({ renderer, canvas, ctx }) {
    /**
     * Color background/sky
     */
    renderer.addLayer(drawImage({ img: state.openingBg }))

    /** 
     * Add hero text 
     */
    renderer.addLayer(drawHero({ time: 15000, canvas, ctx }))
    // renderer.addLayer(drawUI({ text: 'Start' }))
}