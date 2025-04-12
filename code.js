let count = 0;
const valeu = document.getElementById('valeu');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const style = e.currentTarget.classList;
        if (style.contains('decrees')) {
            count--;
        } else if (style.contains('increes')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            valeu.style.color = 'green';
        }
        if (count < 0) {
            valeu.style.color = 'red';
        }
        if (count === 0) {
            valeu.style.color = 'black';
        }
        valeu.textContent = count;
    });
});
