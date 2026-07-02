import drawHero from "./drawHero.js"
import drawSunsetBackground from "./drawSunsetBackground.js"

export default function titleScreen({ renderer, canvas, ctx }) {
    /**
     * Color background/sky
     */
    renderer.addLayer(drawSunsetBackground())

    /** 
     * Add hero text 
     */
    renderer.addLayer(drawHero({ time: 20000, canvas, ctx }))
}