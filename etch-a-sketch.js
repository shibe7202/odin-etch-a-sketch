let container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('squares');
    container.appendChild(div);
}

const grid = document.querySelectorAll('.squares');

grid.forEach((square) => {
    square.addEventListener('mouseover', (event) => {
        event.currentTarget.style.backgroundColor = 'purple';
    })
})