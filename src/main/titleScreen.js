import drawBackground from "./drawBackground.js"
import drawHero from "./drawHero.js"
import drawUI from "./drawUI.js"

export default function titleScreen({ renderer, canvas, ctx }) {
    /**
     * Color background/sky
     */
    renderer.addLayer(drawBackground({ color: 'orange' }))

    /** 
     * Add hero text 
     */
    renderer.addLayer(drawHero({ time: 20000, canvas, ctx }))
    // renderer.addLayer(drawUI({ text: 'Start' }))
}