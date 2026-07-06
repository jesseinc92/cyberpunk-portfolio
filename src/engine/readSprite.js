import spriteAtlas from "../config/spriteAtlas.js"

export default function readSprite({ renderer, atlas, sprite, pos }) {
    return (ctx) => {
        const { canvas } = ctx

        const temp = document.createElement('canvas')
        const tctx = temp.getContext('2d')
    
        /** Copy DPR setting from main canvas */
        const dpr = Number(canvas.dataset.dpr);
    
        temp.width = canvas.clientWidth * dpr
        temp.height = canvas.clientHeight * dpr
    
        tctx.setTransform(dpr, 0, 0, dpr, 0, 0)

        const { tile_size, sprites } = spriteAtlas[atlas]
        const current = sprites.filter(s => s.name === sprite)[0]

        const img = renderer.getAssets().filter(a => a.meta === atlas)[0]

        let offsetX = 0, offsetY = 0
        if (current.offset) {
            offsetX += current.offset[0]
            offsetY += current.offset[1]
        }

        tctx.drawImage(
            img.img,
            current.x * tile_size, current.y * tile_size,
            tile_size, tile_size,
            pos.x + offsetX, pos.y + offsetY,
            tile_size, tile_size
        )

        ctx.drawImage(
            temp,
            0, 0,
            canvas.clientWidth, canvas.clientHeight
        )

        ctx.restore()
    }
}