export default function drawImage({ img }) {
    return (ctx) => {
        const { canvas } = ctx

        ctx.drawImage(
            img,
            0, 0,
            canvas.clientWidth, canvas.clientHeight
        )
    }
}