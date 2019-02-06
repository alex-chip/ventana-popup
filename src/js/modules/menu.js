const openMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId)
    const toggle = document.getElementById(toggleId)

    if(!nav || !toggle) return

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('active')
    })
}

export default openMenu