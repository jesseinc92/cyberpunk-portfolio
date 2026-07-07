export default function throttle(fn, delay) {
    let waiting = false

    return function (...args) {
        if (waiting) return

        fn.apply(this, args)
        waiting = true

        setTimeout(() => {
            waiting = false
        }, delay)
    }
}