export default function handleKeyUp({ e, character }) {
    if (e.key === 'a' || e.key === 'ArrowLeft') { character.stopLeft() }
    if (e.key === 'w' || e.key === 'ArrowUp') { character.stopUp() }
    if (e.key === 'd' || e.key === 'ArrowRight') { character.stopRight() }
    if (e.key === 's' || e.key === 'ArrowDown') { character.stopDown() }
}