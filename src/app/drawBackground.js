export default function drawBackground({ colors, pixelSize = 2, dither = false, preRender = false, preCanvas } = {}) {
    // 4x4 Bayer matrix
    const bayer = [
        [0,  8,  2, 10],
        [12, 4, 14,  6],
        [3, 11,  1,  9],
        [15, 7, 13,  5]
    ]

    function render(ctx, size) {
        const { width, height } = size

        if (dither) {
            for (let y = 0; y < height; y += pixelSize) {
                const value = (y / height) * (colors.length - 1)

                const base = Math.floor(value)
                const blend = value - base

                const colorA = colors[base]
                const colorB = colors[Math.min(base + 1, colors.length - 1)]

                for (let x = 0; x < width; x += pixelSize) {
                    const by = Math.floor(y / pixelSize) % 4
                    const bx = Math.floor(x / pixelSize) % 4

                    const threshold = bayer[by][bx] / 16
                    
                    ctx.fillStyle = blend > threshold ? colorB : colorA
                    ctx.fillRect(x, y, pixelSize, pixelSize)
                }
            }
        } else {
            const [color] = colors

            ctx.fillStyle = color
            ctx.fillRect(0, 0, width, height)
        }
    }

    if (preRender) {
        const temp = document.createElement("canvas")

        temp.width = preCanvas.clientWidth
        temp.height = preCanvas.clientHeight

        const tctx = temp.getContext("2d")

        render(tctx, {
            width: temp.width,
            height: temp.height
        })

        return temp
    }

    return (ctx) => {
        ctx.save()
        render(ctx, {
            width: ctx.canvas.clientWidth,
            height: ctx.canvas.clientHeight
        })
        ctx.restore()
    }
}