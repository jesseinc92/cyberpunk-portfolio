export default function drawHero({ time }) {
    return (ctx) => {
        ctx.save()

        const { canvas } = ctx
    
        const tick = time / 1000 - 12
    
        ctx.globalAlpha = tick / 8
        ctx.font = '180px "toxigenesis", sans-serif'
        ctx.textAlign = 'center'
        ctx.fillStyle = '#520c46'
        ctx.fillText(
            "CyberDev",
            canvas.clientWidth / 2,
            canvas.clientHeight / 2
        )
    
        ctx.restore()
    }
}