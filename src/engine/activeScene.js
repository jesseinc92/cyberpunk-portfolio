import drawTitleAnimation from "../app/scenes/drawTitleAnimation.js"
import drawLivingRoom from "../app/scenes/drawLivingRoom.js"
import drawBedroom from "../app/scenes/drawBedroom.js"

export default function activeScene({ renderer, character, canvas, ctx, time, state, config }) {
    const sceneMap = new Map()
    
    sceneMap.set('titles', drawTitleAnimation)
    sceneMap.set('roomIntro', {})
    sceneMap.set('bedroom', drawBedroom)
    sceneMap.set('livingRoom', drawLivingRoom)

    sceneMap.get(state.scene)({
        // pass all possible params into function to provide
        // access to all functions
        renderer,
        character,
        canvas,
        ctx,
        time,
        state,
        config
    })
}