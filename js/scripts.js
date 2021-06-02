'use strict';

function toggleModal () {
    const overlay = document.querySelector('#overlay');
    overlay.classList.toggle('visible');
}

toggleModal();

const closeModalBtn = document.querySelector('#closeModal');

closeModalBtn.addEventListener('click', function () {
    toggleModal();
})

