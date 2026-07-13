export default function drawHero({ time }) {
    return (ctx) => {
        ctx.save()

        const { canvas } = ctx
    
        const tick = time / 1000 - 11
    
        ctx.globalAlpha = tick / 4
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