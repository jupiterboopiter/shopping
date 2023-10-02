const bar = document.getElementById('menu');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const search = document.getElementsByClassName('search');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



function TestsFunction() {
    const search = document.getElementById("TestsDiv");
    search.style.display = "inline-flex";
}