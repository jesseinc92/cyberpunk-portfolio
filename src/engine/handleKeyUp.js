import state from "../config/state.js"

export default function handleKeyUp({ e, character, state }) {
    /** Character walk */
    if (e.key === 'a' || e.key === 'ArrowLeft') { character.stopLeft() }
    if (e.key === 'w' || e.key === 'ArrowUp') { character.stopUp() }
    if (e.key === 'd' || e.key === 'ArrowRight') { character.stopRight() }
    if (e.key === 's' || e.key === 'ArrowDown') { character.stopDown() }
    
    /** UI/Controls */
    const action = state.actions.find(k => k.actionKey === e.key)
    if (action) action.actionFn(state)
}