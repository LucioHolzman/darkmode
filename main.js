const container = document.querySelector('.container');
const invert = document.getElementsByClassName('.invert')
const btnSun = document.querySelector('.button-sun');
const title = document.querySelector('.title');

container.addEventListener('click', e => {
    container.classList.toggle('invert')
    document.body.classList.toggle('black');
    container.classList.contains('invert') ?
    (title.innerText = 'Dark mode') :
    (title.innerText = 'White mode');
}); 
