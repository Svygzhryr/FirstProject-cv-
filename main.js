const btn = document.querySelector('.btn');
const penis = document.querySelectorAll('.penis');

penis.forEach(penisik => {
    btn.addEventListener('click', () => {
        penisik.classList.add('anim');
    });
});