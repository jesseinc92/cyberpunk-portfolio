import drawBackground from "./drawBackground.js"
import readSprite from "../engine/readSprite.js"
import readTile from "../engine/readTile.js"
import state from "../config/state.js"

export default function drawFloorPlan({ 
    renderer, 
    character, 
    charState,
    canvas, 
    ctx, 
    backgroundColor,
    shell = [],
    contents = [],
    tileSize = 96
}) {
    /**
     * Draw black background
     */

    renderer.addLayer(drawBackground({ colors: [backgroundColor] }))

    /**
     * Draw floor plan
     */

    const TILE_SIZE = tileSize
    const xStart = (canvas.clientWidth / 2) - ((shell.length / 2) * TILE_SIZE)
    const yStart = (canvas.clientHeight / 2) - ((shell.length / 2) * TILE_SIZE)

    // Set initial position only.
    if (!state[charState]) {
        character.setPosition({ x: xStart + 96, y: yStart + 48 })
        state[charState] = true
    }

    for (let y = 0; y < shell.length; y++) {
        for (let x = 0; x < shell[y].length; x++) {
            if (shell[y][x].length !== 0) {
                renderer.addLayer(readTile({
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
     * TODO: Better handling for item anchor placement
     */

    for (const { atlas, sprite, grid, colllision } of contents) {
        renderer.addLayer(readSprite({
            renderer,
            atlas,
            sprite,
            pos: { x: xStart + (grid[0] * TILE_SIZE), y: yStart + (grid[1] * TILE_SIZE) }
        }))
    }
}