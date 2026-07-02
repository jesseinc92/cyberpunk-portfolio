export default async function loadAssets({ renderer, paths }) {
    const results = await Promise.allSettled(
        paths.map(l => loadImage(l))
    )

    const assets = results.filter(r => r.status === 'fulfilled').map(r => r.value)

    for (let a of assets) {
        renderer.addAsset(a)
    }
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src

        img.onload = () => resolve(img)
        img.onerror = reject
    })
}