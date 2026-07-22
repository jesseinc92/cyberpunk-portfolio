export default {
    script: {
        titles: {
            start: 0,
            end: 15000
        },
        exposition: [
            "Wh...wha...where am I? My head. It's pounding.",
            "The last thing I remember is NetWatch hacking my netrun.",
            "...This isn't my computer"
        ]
    },
    palette: {
        opening: {
            ui: {
                border_text: '#00FFAA',
                background: '#007F80'
            },
            // gradient: [
            //     '#614E72',
            //     '#FF785E',
            //     '#FF9E4A',
            //     '#FFC345'
            // ]
            gradient: [
                // '#563263', 
                '#B23E53', 
                '#F14C55', 
                '#FE6345', 
                '#FC7B49'
            ],
            // gradient: [
            //     '#CA91BE',
            //     '#D698B9',
            //     '#E299AC',
            //     '#EDA3AB',
            //     '#F3A8A4',
            //     '#FCB2A5',
            //     '#FFBEA4'
            // ]
        }
    },
    living_room: {
        shell: [
            [ ['room_two', 'wall'], ['room_two', 'wall'], ['room_two', 'wall'], ['room_one', 'window-1'], ['room_one', 'window-2'], ['room_two', 'wall'] ],
            [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'], ['room_two', 'wall'] ],
            [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'], ['room_one', 'floor'] ],
            [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_two', 'wall'], ['room_two', 'wall'], ['room_two', 'wall'] ],
            [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'], ['room_two', 'wall'] ],
            [ ['room_one', 'floor'], ['room_one' ,'floor' ], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one' ,'floor'], ['room_one', 'floor'] ],
        ],
        contents: [
            {
                atlas: 'room_two',
                sprite: 'door',
                grid: [1, 0],
                collision: [
                    ['solid', 'solid'],
                    ['special', 'special']
                ]
            },
            {
                atlas: 'room_three',
                sprite: 'sofa',
                grid: [3, 1],
                collision: [
                    ['solid', 'solid', 'solid'],
                    ['solid', 'solid', 'solid']
                ]
            },
            {
                atlas: 'room_three',
                sprite: 'sofa-table',
                grid: [4.5, 1],
                collision: [
                    [null],
                    ['solid']
                ]
            },
            {
                atlas: 'room_one',
                sprite: 'table',
                grid: [0, 4],
                collision: [
                    ['solid', 'solid'],
                    ['solid', 'solid']
                ]
            },
            {
                atlas: 'room_two',
                sprite: 'fridge',
                grid: [3, 3],
                collision: [
                    [null, null],
                    ['special', 'special']
                ]
            },
            {
                atlas: 'room_two',
                sprite: 'sink',
                grid: [4, 3],
                collision: [
                    ['solid', 'solid']
                    ['solid', 'solid']
                ]
            },
            {
                atlas: 'room_two',
                sprite: 'shelf',
                grid: [5, 3],
                collision: [
                    ['solid', 'solid'],
                    ['solid', 'solid']
                ]
            },
            {
                atlas: 'ruin',
                sprite: 'dead-machine',
                grid: [0, 2],
                collision: [
                    ['special', 'special'],
                    ['solid', 'solid'],
                ]
            },
            {
                atlas: 'ruin',
                sprite: 'circuit-junk',
                grid: [1, 2],
                collision: [
                    ['solid', 'special'],
                    ['solid', 'special']
                ]
            }
        ]
    },
    bedroom: {
        shell: [
            [ [], ['room_two', 'wall'], ['room_two', 'wall'], ['room_one', 'window-1'], ['room_two', 'wall'], ['room_two', 'wall'] ],
            [ ['room_two', 'wall'], ['room_two', 'circuit-floor'], ['room_two', 'circuit-floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'] ],
            [ ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'] ],
            [ [], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'] ],
            [ [], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'], ['room_one', 'floor'] ],
        ],
        contents: [
            {
                atlas: 'room_four',
                sprite: 'servers',
                grid: [1, 1],
                collision: [
                    ['solid', 'solid'],
                    ['solid', 'solid']
                ]
            },
            {
                atlas: 'room_four',
                sprite: 'servers',
                grid: [2, 1],
                collision: [
                    ['solid', 'solid'],
                    ['solid', 'solid']
                ]
            },
            {
                atlas: 'room_three',
                sprite: 'bed',
                grid: [4.25, 1],
                collision: [
                    ['solid', 'solid', 'solid', 'solid'],
                    [null, 'solid', 'solid', null],
                    [null, 'solid', 'solid', null]
                ]
            },
            {
                atlas: 'room_five',
                sprite: 'computer',
                grid: [1, 3],
                collision: [
                    ['solid', null, 'solid'],
                    ['solid', 'solid', 'special'],
                    ['solid', 'special', 'special']
                ]
            },
            {
                atlas: 'room_three',
                sprite: 'fish-tank',
                grid: [4, 4],
                collision: [
                    ['solid', 'solid'],
                    ['solid', 'solid']
                ]
            },
            {
                atlas: 'room_one',
                sprite: 'blue-plant',
                grid: [5, 4]
            }
        ],
    },
    bathroom: {
        shell: [],
        contents: [],
    }
}