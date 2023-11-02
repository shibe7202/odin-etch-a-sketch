let container = document.querySelector('#container');

function create(n = 256) {
    for (let i = 0; i < n; i++) {
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
}
create();

const btn = document.querySelector('#button');
btn.addEventListener('click', () => {
    let size = prompt('Enter squares per side');
    if (size <= 100 && size > 0) {
        container.innerHTML = '';
        create(size * size);

        const grid = document.querySelectorAll('.squares');
        const squareDimensions = 800 / size;
        
        grid.forEach((square) => {
            square.style.height = "" + squareDimensions + "px";
            square.style.width = "" + squareDimensions + "px";
        })
    }
})

