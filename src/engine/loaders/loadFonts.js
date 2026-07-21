export default async function loadFonts(fonts) {
    await Promise.allSettled(
        fonts.map(f => loadFont(f))
    )
}

async function loadFont(f) {
    const font = new FontFace(
        f.font,
        `url("./static/fonts/${f.font}.${f.type}")`
    )

    await font.load()

    document.fonts.add(font)
}