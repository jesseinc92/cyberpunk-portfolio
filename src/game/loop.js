export default function animationLoop({ canvas, ctx }) {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

    // Draw stuff here

    requestAnimationFrame(() => animationLoop({ canvas, ctx }))
}