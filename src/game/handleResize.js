export default function resizeCanvas({ canvas, ctx }) {
    const dpr = window.devicePixelRatio || 1

    canvas.width = canvas.clientWidth * dpr
    canvas.height = canvas.clientHeight * dpr

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}