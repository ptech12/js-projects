// Grabbing the tags

let openBtn = document.getElementById('modal-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');


// Event Listners

// CLick event listener: Modal Open
openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
})

// close on clicking anywhere
// highest element of DOM
window.addEventListener('click', e => {
    console.log(e.target);
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})