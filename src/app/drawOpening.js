import config from "../config/config.js"
import state from "../config/state.js"
import setDprOnDupeCanvas from "../utils/setDprOnDupeCanvas.js"
import drawBackground from "./drawBackground.js"
import drawHero from "./drawHero.js"
import drawImage from "../engine/drawImage.js"

export default async function drawOpening({ time, renderer, canvas, ctx }) {
    /**
     * Color background/sky
     */
    
    renderer.addLayer(drawImage({ img: state.openingBg }))

    /**
     * Draw masks
     */

    let colorValue = 0
    const colorMap = [
        '#9d5751',
        '#9e5782',
        '#520c46',
    ]

    try {
        for (let layer of renderer.getAssets().filter(a => a.meta === 'opening' )) {
            ctx.save()

            const tick = time / 1000
            const incrementX = canvas.clientWidth / 8
            const incrementY = canvas.clientHeight / 3

            let posL = {}
            let posR = {}
            if (time < 8000) {
                posL = { x: 0 - ( tick * incrementX ), y: 0 }
                posR = { x: canvas.clientWidth - ( tick * incrementX ), y: 0 }
            } else {
                posL = { x: -canvas.clientWidth, y: 0 }
                posR = { x: 0, y: 0 + ( ( tick - 8 ) * incrementY ) }
            }

            renderer.addLayer(silhouette({ img: layer.img, color: colorMap[colorValue], ctx, pos: posL }))
            renderer.addLayer(silhouette({ img: layer.img, color: colorMap[colorValue], ctx, pos: posR }))

            colorValue++

            ctx.restore()
        }
    } catch (err) {
        console.error('1 or more images failed to load: ', err)
    }

    if (time > 11000) renderer.addLayer(drawHero({ time, canvas, ctx }))
}

function silhouette({ img, color, pos = { x: 0, y: 0 } }) {
    return (ctx) => {
        const { canvas, temp, tctx } = setDprOnDupeCanvas(ctx)
    
        tctx.drawImage(img, 0, canvas.clientHeight / 3, canvas.clientWidth, canvas.clientHeight)
    
        tctx.globalCompositeOperation = 'source-in'
        tctx.fillStyle = color
        tctx.fillRect(0, 0, temp.width, temp.height)
    
        ctx.drawImage(temp, pos.x, pos.y, canvas.clientWidth, canvas.clientHeight)
    }
}
