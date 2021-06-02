'use strict';

function toggleModal () {
    const overlay = document.querySelector('#overlay');
    overlay.classList.toggle('visible');
}


const closeModalBtn = document.querySelector('#closeModal');

closeModalBtn.addEventListener('click', function () {
    toggleModal();
})

// const overlay = document.querySelector('#overlay');
// overlay.addEventListener('click', function () {
//     toggleModal();
// })

function buildQuote(theQuote) {
    const modalElement = document.querySelector('#modal p');
    modalElement.innerText = theQuote;
    toggleModal();
}

document.addEventListener('DOMContentLoaded', function () {
    fetch(`https://api.chucknorris.io/jokes/random?category=dev`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            buildQuote(data.value);
        })
        .catch(function(error){
            console.error("ERROR: ", error);
            return error;
        });

        // Allows for any key you press to open and close the pop-up:
        // document.addEventListener('keydown', function(event) {
        //     console.log("The key that was pressed: ", event.key)
        //     if (event.key === 'Escape') {
        //         toggleModal();
        //     }
        // })
})
