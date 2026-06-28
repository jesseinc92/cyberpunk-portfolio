customElements.define('cyber-ui', class cyberUI extends HTMLElement {
    constructor() {
        super()
        this._initializated = false
    }

    static get observedAttributes() {
        return ['x', 'y', 'height', 'width', 'title', 'body', 'main']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return

        if (name === 'title') this._title = newValue
        if (name === 'body') this._body = newValue
        if (name === 'x') this._x = Number.parseFloat(newValue)
        if (name === 'y') this._y = Number.parseFloat(newValue)
        if (name === 'width') this._width = newValue
        if (name === 'height') this._height = newValue
        if (name === 'main') {
            this._main = newValue === 'main'
            if (newValue !== 'main') this.classList.add('cyber-ui--reflection')
        }

        if (this.isConnected) this.render()
    }

    connectedCallback() {
        if (this._initializated) return
        this._initializated = true

        this.setTitle()
        this.setBody()

        this.render()
    }

    setTitle() {
        const title = document.createElement('h4')
        title.className = 'cyber-ui__title'

        title.innerText = this._title
        this.appendChild(title)
    }

    setBody() {
        let body
        if (this._body.includes('Arr::')) {
            const bodyWrapper = document.createElement('div')
            bodyWrapper.className = 'cyber-ui__body'
            this.appendChild(bodyWrapper)

            body = this._body.replace('Arr::', '').split(',')
            for (let b of body) {
                const bodySub = document.createElement('p')
                bodySub.innerText = b
                bodyWrapper.appendChild(bodySub)
            }

            return
        } else {
            body = document.createElement('p')
            body.className = 'cyber-ui__body'
            body.innerText = this._body
        }

        this.appendChild(body)
    }

    calculateNormalizedAndSetPosition() {
        let x = (this._x / window.innerWidth) * 2 - 1
        let y = (this._y / window.innerHeight) * 2 - 1

        return { x: x * 25, y: y * 25 }
    }

    render() {
        if (this._main) {
            this.style.top = this._y + 'px'
            this.style.left = this._x + 'px'
        } else {
            this.style.top = (this._y - this.calculateNormalizedAndSetPosition().y) + 'px'
            this.style.left = (this._x - this.calculateNormalizedAndSetPosition().x) + 'px'
        }

        if (this._width) this.style.width = this._width
        if (this._height) this.style.height = this._height
    }
})