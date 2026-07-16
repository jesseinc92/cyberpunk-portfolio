export default function fade({ dir, time, state, timing = 3 }) {
    return (ctx) => {
        const { canvas } = ctx

        const delta = (time - state.transitionStart) / 1000

        ctx.fillStyle = `rgba(0, 0, 0, ${ delta / timing })`
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)

        if (delta/timing >= 1) {
            state.scene = state.newScene
            state.transition = false
        }
    }
}