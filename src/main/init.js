const cyberUIConfig = [
    {
        title: 'Config',
        body: 'hlah',
        x: .35,
        y: .50
    },
    {
        title: 'Env',
        body: 'VANTA protocol engaged.',
        x: .10,
        y: .20
    },
    {
        title: '/user/bin/001.fl',
        body: 'Arr::[TRACE] signal drift detected in sector 4,[TRACE] amplifying beacon frequency,[TRACE] decoding fragmented packet stream,[WARN] partial data corruption detected,[RECOVER] reconstructing payload from redundancy layer,[OK] message integrity restored',
        x: .75,
        y: .30
    },
    {
        title: '/user/lib/lcars/123-2356.fl',
        body: 'Arr::latency: 12ms,drift correction active',
        x: .40,
        y: .75
    },
] // x/y percentage values from 0 to 1

window.addEventListener('DOMContentLoaded', () => {
    cyberSetup()
})

function cyberSetup() {
    const cyberWrapper = document.querySelector('.cyber-ui-wrapper')
    const size = {
        width: cyberWrapper.getBoundingClientRect().width,
        height: cyberWrapper.getBoundingClientRect().height
    }

    /** Create UI Terminals */
    for (let c of cyberUIConfig) {        
        cyberWrapper.append(
            createCyberUI(c, size, "reflection"),
            createCyberUI(c, size, "main")
        )
    }

    // setTimeout(() => cyberWrapper.classList.add('cyber-ui-wrapper--blur'), 2000);
}

function createCyberUI(c, size, mode) {
    const newEl = document.createElement('cyber-ui')
    newEl.setAttribute('title', c.title)
    newEl.setAttribute('body', c.body)
    newEl.setAttribute('x', c.x * size.width)
    newEl.setAttribute('y', c.y * size.height)
    newEl.setAttribute('main', mode)

    return newEl
}