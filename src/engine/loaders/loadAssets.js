export default async function loadAssets({ renderer, assets }) {
    const results = await Promise.allSettled(
        assets.map(async l => {
            const { path, type, ...rest } = l
            return { 
                img: await loadImage(path),
                type,
                ...rest
            }
        })
    )

    const assetsSuccess = results.filter(r => r.status === 'fulfilled').map(r => r.value)

    for (let a of assetsSuccess) {
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