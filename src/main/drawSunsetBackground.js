export default function drawSunsetBackground() {
    return (ctx) => {
        ctx.save()

        const { canvas } = ctx

        ctx.fillStyle = 'orange'
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)

        ctx.restore()
    }
}