'use strict';

let showModal = document.querySelectorAll('.show-modal')
let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.close-modal')

let open = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

let closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', open)
}
close.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal()
    }
})

overlay.addEventListener('click', closeModal)