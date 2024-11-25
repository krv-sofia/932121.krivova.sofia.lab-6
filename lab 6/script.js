function hide(part) {
    const otherPart = part == 'left' ? 'right' : 'left';
    const picture = document.getElementById(`${part}-picture`);
    picture.classList.add('hidden');

    const otherPicture = document.getElementById(`${otherPart}-picture`);
    otherPicture.style.width = '80%';

    const partEl = document.getElementById(part);
    partEl.style.width = '0%';
}

function show(part) {
    const otherPart = part == 'left' ? 'right' : 'left';
    const picture = document.getElementById(`${part}-picture`);
    picture.classList.remove('hidden');

    const otherPicture = document.getElementById(`${otherPart}-picture`);
    otherPicture.style.width = '100%';

    const partEl = document.getElementById(part);
    partEl.style.width = '100%';
}

function left() {
    hide('left');
    show('right');
}

function right() {
    hide('right');
    show('left');
}

function both() {
    show('left');
    show('right');
}