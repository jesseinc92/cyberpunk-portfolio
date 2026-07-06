import drawBackground from "./drawBackground.js"
import drawHero from "./drawHero.js"

export default async function drawOpening({ time, renderer, canvas, ctx }) {
    /**
     * Color background/sky
     */
    
    renderer.addLayer(drawBackground({ color: 'orange' }))
    
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
            const incrementX = canvas.clientWidth / 10
            const incrementY = canvas.clientHeight / 5

            let posL = {}
            let posR = {}
            if (time < 10000) {
                posL = { x: 0 - ( tick * incrementX ), y: 0 }
                posR = { x: canvas.clientWidth - ( tick * incrementX ), y: 0 }
            } else {
                posL = { x: -canvas.clientWidth, y: 0 }
                posR = { x: 0, y: 0 + ( ( tick - 10 ) * incrementY ) }
            }

            renderer.addLayer(silhouette({ img: layer.img, color: colorMap[colorValue], ctx, pos: posL }))
            renderer.addLayer(silhouette({ img: layer.img, color: colorMap[colorValue], ctx, pos: posR }))

            colorValue++

            ctx.restore()
        }
    } catch (err) {
        console.error('1 or more images failed to load: ', err)
    }

    if (time > 12000) renderer.addLayer(drawHero({ time, canvas, ctx }))
}

function silhouette({ img, color, pos = { x: 0, y: 0 } }) {
    return (ctx) => {
        const { canvas } = ctx
    
        const temp = document.createElement('canvas')
        const tctx = temp.getContext('2d')
    
        /** Copy DPR setting from main canvas */
        const dpr = Number(canvas.dataset.dpr);
    
        temp.width = canvas.clientWidth * dpr
        temp.height = canvas.clientHeight * dpr
    
        tctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        /**  */
    
        tctx.drawImage(img, 0, 0, canvas.clientWidth, canvas.clientHeight)
    
        tctx.globalCompositeOperation = 'source-in'
        tctx.fillStyle = color
        tctx.fillRect(0, 0, temp.width, temp.height)
    
        ctx.drawImage(temp, pos.x, pos.y, canvas.clientWidth, canvas.clientHeight)
    }
}
