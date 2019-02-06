const popup = (overlay,popup,btnOpen,btnClose) => {
    const divOverlay = document.getElementById(overlay),
        divPopup = document.getElementById(popup),
        buttonOpen = document.getElementById(btnOpen),
        buttonClose = document.getElementById(btnClose)

    if(!divOverlay || !divPopup || !buttonOpen || !buttonClose) return

    buttonOpen.addEventListener('click', () => {
        divOverlay.classList.add('active')
        divPopup.classList.add('active')
    })

    buttonClose.addEventListener('click', () => {
        divOverlay.classList.remove('active')
        divPopup.classList.remove('active')
    })
}

export default popup