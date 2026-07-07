export default function handleKeyDown({ e, walkLeft, walkUp, walkRight, walkDown }) {
    if (e.key === 'a' || e.key === 'ArrowLeft') { walkLeft() }
    if (e.key === 'w' || e.key === 'ArrowUp') { walkUp() }
    if (e.key === 'd' || e.key === 'ArrowRight') { walkRight() }
    if (e.key === 's' || e.key === 'ArrowDown') { walkDown() }
}