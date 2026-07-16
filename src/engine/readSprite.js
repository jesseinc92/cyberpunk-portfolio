import spriteAtlas from "../config/spriteAtlas.js"
import setDprOnDupeCanvas from "../utils/setDprOnDupeCanvas.js"

export default function readSprite({ renderer, atlas, sprite, pos, scale = { x: 1, y: 1 } }) {
    return (ctx) => {
        const { canvas, temp, tctx } = setDprOnDupeCanvas(ctx)

        const { sprites } = spriteAtlas[atlas]
        const current = sprites.filter(s => s.name === sprite)[0]

        const img = renderer.getAssets().filter(a => a.meta === atlas)[0]

        let anchorX = 0, anchorY = 0
        if (current.anchor) {
            anchorX += current.anchor[0]
            anchorY += current.anchor[1]
        }

        const w = current.w * scale.x
        const h = current.h * scale.y

        tctx.drawImage(
            img.img,
            current.x, current.y,
            current.w, current.h,
            pos.x + anchorX - (w - current.w) / 2, 
            pos.y + anchorY - (h - current.h) / 2,
            w, h
        )

        ctx.drawImage(
            temp,
            0, 0,
            canvas.clientWidth, canvas.clientHeight
        )
    }
}