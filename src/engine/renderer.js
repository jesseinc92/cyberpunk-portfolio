export default class Renderer {
    constructor({ canvas, ctx }) {
        this.canvas = canvas || null
        this.ctx = ctx || null

        this.layers = []
        this.effects = []

        this.assets = []
    }

    setCanvas(canvas) {
        this.canvas = canvas
    }

    setCtx(ctx) {
        this.ctx = ctx
    }

    getAssets() {
        return this.assets
    }

    addAsset(asset) {
        this.assets.push(asset)
    }

    addLayer(drawFn) {
        this.layers.push(drawFn)
    }

    addEffect(drawFn) {
        this.effects.push(drawFn)
    }

    clear(color = '#ffffff') {
        this.ctx.save()
        this.ctx.globalCompositeOperation = 'source-over'
        this.ctx.fillStyle = color
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.restore()
    }

    render() {
        this.clear()
        
        for (let layer of this.layers) {
            this.ctx.save()
            this.ctx.globalCompositeOperation = "source-over"
            layer(this.ctx)
            this.ctx.restore()
        }

        for (let effect of this.effects) {
            this.ctx.save()
            effect(this.ctx)
            this.ctx.restore()
        }

        this.layers = []
        this.effects = []
    }
}

