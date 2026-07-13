export default function setDprOnDupeCanvas(ctx) {
    const { canvas } = ctx
    
    const temp = document.createElement('canvas')
    const tctx = temp.getContext('2d')

    /** Copy DPR setting from main canvas */
    const dpr = Number(canvas.dataset.dpr);

    temp.width = canvas.clientWidth * dpr
    temp.height = canvas.clientHeight * dpr

    tctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    return { canvas, temp, tctx }
}