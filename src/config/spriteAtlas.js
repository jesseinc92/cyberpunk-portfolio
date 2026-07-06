export default {
    room_one: {
        tile_size: 96,
        sprites: [
            { name: 'floor',  x: 4, y: 2 },
            { name: 'window-1', x: 6, y: 0 },
            { name: 'window-2', x: 7, y: 0 },
        ]
    },
    room_two: {
        tile_size: 96,
        sprites: [
            { name: 'wall', x: 1, y: 0 },
            { name: 'door', x: 5, y: 4 },
            { name: 'computer', x: 3, y: 1.5},
            { name: 'fridge', x: 3, y: 4, offset: [0, 24] },
            { name: 'sink', x: 4, y: 5, offset: [0, 24] },
            { name: 'shelf', x: 6, y: 0, offset: [0, 24] },
        ]
    },
    room_three: {
        tile_size: 96,
        sprites: [
            { name: 'dining-left', x: 4, y: 7, offset: [0, -15] },
            { name: 'dining-right', x: 5, y: 7, offset: [0, -15] },
            { name: 'sofa-left', x: 4, y: 6, offset: [0, -15] },
            { name: 'sofa-right', x: 5, y: 6, offset: [0, -15] }
        ]
    }
}