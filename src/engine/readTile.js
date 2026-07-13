import tileAtlas from "../config/tileAtlas.js"
import setDprOnDupeCanvas from "../utils/setDprOnDupeCanvas.js"

export default function readTile({ renderer, atlas, sprite, pos }) {
    return (ctx) => {
        const { canvas, temp, tctx } = setDprOnDupeCanvas(ctx)

        const { tile_size, sprites } = tileAtlas[atlas]
        const current = sprites.filter(s => s.name === sprite)[0]

        const img = renderer.getAssets().filter(a => a.meta === atlas)[0]
        
        tctx.drawImage(
            img.img,
            current.x * tile_size, current.y * tile_size,
            tile_size, tile_size,
            pos.x, pos.y,
            tile_size, tile_size
        )

        ctx.drawImage(
            temp,
            0, 0,
            canvas.clientWidth, canvas.clientHeight
        )
    }
}