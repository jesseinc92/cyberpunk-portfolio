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
    },
    ruin: {
        tile_size: 96,
        sprites: [
            { name: 'dead-machine', x: 7, y: 3, offset: [0, -15] },
            { name: 'circuit-junk', x: 7, y: 7, offset: [-30, 0] }
        ]
    },
    masc_hero: {
        tile_size: 96,
        sprites: [
            { name: 'down', x: 1, y: 0 },
            { name: 'down-l', x: 0, y: 0 },
            { name: 'down-r', x: 2, y: 0 },
            { name: 'right', x: 1, y: 2 },
            { name: 'right-l', x: 0, y: 2 },
            { name: 'right-r', x: 2, y: 2 },
            { name: 'up', x: 1, y: 3 },
            { name: 'up-l', x: 2, y: 3 },
            { name: 'up-r', x: 0, y: 3 },
            { name: 'left', x: 1, y: 1 },
            { name: 'left-l', x: 2, y: 1 },
            { name: 'left-r', x: 0, y: 1 }
        ]
    },
    fem_hero: {
        tile_size: 96,
        sprites: [
            { name: 'down', x: 1, y: 0 },
            { name: 'down-l', x: 2, y: 0 },
            { name: 'down-r', x: 0, y: 0 },
            { name: 'right', x: 1, y: 2 },
            { name: 'right-l', x: 0, y: 2 },
            { name: 'right-r', x: 2, y: 2 },
            { name: 'up', x: 1, y: 3 },
            { name: 'up-l', x: 2, y: 3 },
            { name: 'up-r', x: 0, y: 3 },
            { name: 'left', x: 1, y: 1 },
            { name: 'left-l', x: 2, y: 1 },
            { name: 'left-r', x: 0, y: 1 }
        ]
    }
}