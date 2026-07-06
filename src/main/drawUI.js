import config from "../config/config.js"

export default function drawUI({ text = '', color = config.palette.ui }) {
    return (ctx) => {
        ctx.save()

        const { canvas } = ctx

        ctx.font = '24px Toxigenesis, sans-serif'
        ctx.fillStyle = color
        ctx.fillText(
            text,
            canvas.clientWidth / 2,
            (canvas.clientHeight / 3) * 2
        )

        ctx.restore()
    }
}