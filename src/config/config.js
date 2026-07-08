export default {
    script: {
        opening: {
            start: 0,
            end: 20000
        }
    },
    palette: {
        ui: '#05c8f8'
    },
    living_room: {
        shell: [
            [ ['room_two', 'wall'], ['room_two', 'wall'], ['room_two', 'wall'], ['room_one', 'window-1'], ['room_one', 'window-2'], ['room_two', 'wall'] ],
            [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'] ],
            [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'], ['room_one', 'floor'] ],
            [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_two', 'wall'], ['room_two', 'wall'], ['room_two', 'wall'] ],
            [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'] ],
            [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'], ['room_one', 'floor'] ],
        ],
        contents: [
            [[], ['room_two', 'door'], [], [], [], []],
            [[], [], [], ['room_three', 'sofa-left'] ,['room_three', 'sofa-right'], []],
            [['ruin', 'dead-machine'], ['ruin', 'circuit-junk'], [], [] ,[], []],
            [[], [], [], ['room_two', 'fridge'] ,['room_two', 'sink'], ['room_two', 'shelf']],
            [['room_three', 'dining-left'], ['room_three', 'dining-right'], [], [] ,[], []],
            [[], [], [], [] ,[], []],
        ]
    },
    bedroom: {
        shell: [
            [ [], ['room_two', 'wall'], ['room_two', 'wall'], ['room_one', 'window-1'], ['room_two', 'wall'], ['room_two', 'wall'] ],
            [ [], ['room_two', 'circuit-floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'] ],
            [ ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'] ],
            [ [], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'] ],
            [ [], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'] ],
        ],
        contents: [
            [ [], [], [], [], [], [] ],
            [ [], ['room_four', 'servers'], [], [], [], ['room_two', 'bed'] ],
            [ [], [], [], [], [], [] ],
            [ [], [], [], [], ['room_five', 'desk-ul'], ['room_five', 'desk-ur'] ],
            [ [], [], [], [], ['room_five', 'desk-ll'], ['room_five', 'desk-lr'] ],
        ]
    }
}