import readSprite from "../readSprite.js"

export default class Character {
    constructor({ renderer, atlas, pos = { x: 0, y: 0 } }) {
        this.renderer = renderer || null
        this.atlas = atlas

        this.inventory = null

        this.pos = { x: pos.x, y: pos.y }
        this.sprite = 'down'

        this.walkIdx = 0
    }

    setPosition({ x, y }) {
        this.pos.x = x
        this.pos.y = y
    }

    walkRight(e) {
        return () => {
            this.sprite = ['right-l', 'right', 'right-r', 'right'].at(this.walkIdx)
            this.walkIdx = this.walkIdx === 3 ? 0 : this.walkIdx + 1
            this.pos.x = this.pos.x + 13
        }
    }

    stopRight(e) {
        this.sprite = 'right'
    }

    walkLeft(e) {
        return () => {
            this.sprite = ['left-l', 'left', 'left-r', 'left'].at(this.walkIdx)
            this.walkIdx = this.walkIdx === 3 ? 0 : this.walkIdx + 1
            this.pos.x = this.pos.x - 13
        }
    }

    stopLeft(e) {
        this.sprite = 'left'
    }

    walkDown(e) {
        return () => {
            this.sprite = ['down-l', 'down', 'down-r', 'down'].at(this.walkIdx)
            this.walkIdx = this.walkIdx === 3 ? 0 : this.walkIdx + 1
            this.pos.y = this.pos.y + 13
        }
    }

    stopDown(e) {
        this.sprite = 'down'
    }

    walkUp(e) {
        return () => {
            this.sprite = ['up-l', 'up', 'up-r', 'up'].at(this.walkIdx)
            this.walkIdx = this.walkIdx === 3 ? 0 : this.walkIdx + 1
            this.pos.y = this.pos.y - 13
        }
    }
I
    stopUp(e) {
        this.sprite = 'up'
    }

    render() {
        this.renderer.addLayer(readSprite({
            renderer: this.renderer,
            atlas: this.atlas,
            sprite: this.sprite,
            pos: this.pos
        }))
    }
}