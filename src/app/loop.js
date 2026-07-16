import state from "../config/state.js"
import config from "../config/config.js"
import fade from "../engine/transitions/fade.js"
import activeScene from "../engine/activeScene.js"

export default function animationLoop({ renderer, character = null, canvas, ctx, time = 0 }) {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

    activeScene({
        renderer,
        character,
        canvas,
        ctx,
        time,
        state,
        config
    })

    if (state.transition) {
        renderer.addLayer(fade({ time, state, timing: 2.5 }))
    }

    // Handle collisions
    renderer.render() // Always run after all changes have been recorded and ready for draw

    requestAnimationFrame((time) => animationLoop({ renderer, character, canvas, ctx, time }))
}
