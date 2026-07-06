export default async function loadFonts(fonts) {
    await Promise.allSettled(
        fonts.map(f => loadFont(f))
    )
}

async function loadFont(f) {
    const font = new FontFace(
        f,
        `url("./static/fonts/${f}.otf")`
    )

    await font.load()

    document.fonts.add(font)
}