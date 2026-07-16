import config from "../config/config.js"
import state from "../config/state.js"
import readSprite from "../engine/readSprite.js"

export default function drawUI({ 
    text = '',
    size = 24,
    pos = { x: 0, y: 0 },
    mouse = true,
    actionKey = null,
    actionFn = null
}) {
    return (ctx) => {
        const { canvas } = ctx

        /** Text */
        ctx.font = `${size}px Toxigenesis, sans-serif`
        ctx.fillStyle = config.palette.opening.ui.border_text
        ctx.fillText(
            text,
            pos.x,
            pos.y
        )

        state.actions.push({
            actionKey,
            actionFn
        })
    }
}