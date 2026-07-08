import drawBackground from "./drawBackground.js"
import readSprite from "../engine/readSprite.js"

export default function drawFloorPlan({ 
    renderer, 
    character, 
    canvas, 
    ctx, 
    backgroundColor,
    shell = [],
    contents = []
}) {
    /**
     * Draw black background
     */

    renderer.addLayer(drawBackground({ color: backgroundColor }))

    /**
     * Draw floor plan
     */

    const TILE_SIZE = 96
    const xStart = (canvas.clientWidth / 2) - ((shell.length / 2) * TILE_SIZE)
    const yStart = (canvas.clientHeight / 2) - ((shell.length / 2) * TILE_SIZE)

    for (let y = 0; y < shell.length; y++) {
        for (let x = 0; x < shell[y].length; x++) {
            if (shell[y][x].length !== 0) {
                renderer.addLayer(readSprite({
                    renderer,
                    atlas: shell[y][x][0], 
                    sprite: shell[y][x][1], 
                    pos: { x: xStart + (x * TILE_SIZE), y: yStart + (y * TILE_SIZE) },
                }))
            }
        }
    }

    /**
     * Draw room content.
     * TODO: Better handling for item offset placement
     */

    for (let y = 0; y < contents.length; y++) {
        for (let x = 0; x < contents[y].length; x++) {
            if (contents[y][x].length !== 0) {
                renderer.addLayer(readSprite({
                    renderer,
                    atlas: contents[y][x][0],
                    sprite: contents[y][x][1],
                    pos: { x: xStart + (x * TILE_SIZE), y: yStart + (y * TILE_SIZE) }
                }))
            }
        }
    }
}