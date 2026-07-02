import config from "../config/config.js"
import drawOpening from "./drawOpening.js"
import titleScreen from "./titleScreen.js"

export default function animationLoop({ renderer, canvas, ctx, time = 0 }) {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

    // All game stuff here
    if (time > config.script.opening.start && time < config.script.opening.end) {
        drawOpening({ time, renderer, canvas, ctx })
    }

    // On animation end, display title w/ start button
    // Remain until user action
    if (time > config.script.opening.end) {
        titleScreen({ renderer, canvas, ctx })
    }

    renderer.render() // Always run after all changes have been recorded and ready for draw

    requestAnimationFrame((time) => animationLoop({ renderer, canvas, ctx, time }))
}
