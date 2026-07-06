export default function drawBackground({ color = '#0E1111' }) {
    return (ctx) => {
        ctx.save()

        const { canvas } = ctx

        ctx.fillStyle = color
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)

        ctx.restore()
    }
}