const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let current = 1;

next.addEventListener('click', () => {
    current++;

    if(current > circles.length) {
        current = circles.length;
    }

    update()
})

prev.addEventListener('click', () => {
    current--;

    if(current < 1) {
        current = 1;
    }

    update()
})

function update() {
    circles.forEach((circle, index) => {
        if(index < current) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const activeClass = document.querySelectorAll('.active');

    progress.style.width = (activeClass.length - 1) / (circles.length - 1) * 100 + '%';

    if (current == 1) {
        prev.disabled = true;
    } else if (current == 4) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}