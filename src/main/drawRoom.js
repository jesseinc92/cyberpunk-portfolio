import drawBackground from "./drawBackground.js"
import readSprite from "../engine/readSprite.js"

export default function drawRoom({ renderer, canvas, ctx }) {
    /**
     * Draw black background
     */

    renderer.addLayer(drawBackground({}))

    /**
     * Draw floor plan
     */

    const TILE_SIZE = 96
    const xStart = (canvas.clientWidth / 2) - (3 * TILE_SIZE)
    const yStart = (canvas.clientHeight / 2) - (3 * TILE_SIZE)

    const roomPlan = [
        [ ['room_two', 'wall'], ['room_two', 'wall'], ['room_two', 'wall'], ['room_one', 'window-1'], ['room_one', 'window-2'], ['room_two', 'wall'] ],
        [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'] ],
        [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'], ['room_one', 'floor'] ],
        [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_two', 'wall'], ['room_two', 'wall'], ['room_two', 'wall'] ],
        [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'] ],
        [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'], ['room_one', 'floor'] ],
    ]

    for (let y = 0; y < roomPlan.length; y++) {
        for (let x = 0; x < roomPlan[y].length; x++) {
            if (roomPlan[y][x].length !== 0) {
                renderer.addLayer(readSprite({
                    renderer,
                    atlas: roomPlan[y][x][0], 
                    sprite: roomPlan[y][x][1], 
                    pos: { x: xStart + (x * TILE_SIZE), y: yStart + (y * TILE_SIZE) },
                }))
            }
        }
    }

    /**
     * Draw room content.
     * TODO: Better handling for item offset placement
     */

    const roomContents = [
        [[], ['room_two', 'door'], [], [], [], []],
        [[], [], [], ['room_three', 'sofa-left'] ,['room_three', 'sofa-right'], []],
        [['ruin', 'dead-machine'], ['ruin', 'circuit-junk'], [], [] ,[], []],
        [[], [], [], ['room_two', 'fridge'] ,['room_two', 'sink'], ['room_two', 'shelf']],
        [['room_three', 'dining-left'], ['room_three', 'dining-right'], [], [] ,[], []],
        [[], [], [], [] ,[], []],
    ]

    for (let y = 0; y < roomContents.length; y++) {
        for (let x = 0; x < roomContents[y].length; x++) {
            if (roomContents[y][x].length !== 0) {
                renderer.addLayer(readSprite({
                    renderer,
                    atlas: roomContents[y][x][0],
                    sprite: roomContents[y][x][1],
                    pos: { x: xStart + (x * TILE_SIZE), y: yStart + (y * TILE_SIZE) }
                }))
            }
        }
    }
}