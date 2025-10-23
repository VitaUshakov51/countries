const select = document.getElementById('select');
const options = document.getElementById('options');

select.addEventListener('click', () => {
    options.classList.toggle('open');
})

