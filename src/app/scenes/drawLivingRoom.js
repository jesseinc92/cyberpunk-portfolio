import drawFloorPlan from "../drawFloorPlan.js"

export default function drawLivingRoom({ renderer, character, canvas, ctx, config }) {
    drawFloorPlan({ 
        renderer, 
        character, 
        charState: 'livingRoomInit',
        canvas, 
        ctx,
        shell: config.living_room.shell,
        contents: config.living_room.contents,
    })
    
    character.render()
}