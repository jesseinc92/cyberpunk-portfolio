import drawOpening from "../drawOpening.js"
import titleScreen from "../titleScreen.js"

export default function drawTitleAnimation({ renderer, canvas, ctx, time, config, state }) {
    if (time < config.script.titles.end) {
        drawOpening({ time, renderer, canvas, ctx })
    }

    // // On animation end, display title w/ start button
    // // Remain until user action
    if (time > config.script.titles.end) {
        titleScreen({ renderer, canvas, ctx, time })
    }
}