import drawFloorPlan from "../drawFloorPlan.js"

export default function drawBedroom({ renderer, character, canvas, ctx, config }) {
    drawFloorPlan({ 
        renderer, 
        character, 
        charState: 'livingRoomInit',
        canvas, 
        ctx,
        shell: config.bedroom.shell,
        contents: config.bedroom.contents,
    })
    character.render() // Position character
}