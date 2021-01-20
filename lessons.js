//FIX BRASS ACADEMY LOGO TO TOP CORNER ON SCROLL

const academy = document.getElementById('academy-logo');
const topOfAcademy = academy.offsetTop;
let mobile = window.matchMedia('(max-width: 900px)');

const fixAcademy = () => {
    if (window.scrollY >= topOfAcademy) {
        document.body.classList.add('fixed-logo');
    } else {
        document.body.classList.remove('fixed-logo');
    }
};

document.addEventListener('scroll', fixAcademy);

window.onresize = () => {
    mobile = window.matchMedia('(max-width: 900px)');
    if (!mobile.matches) {    
        document.addEventListener('scroll', fixAcademy);
    } else {
        document.removeEventListener('scroll', fixAcademy);
        document.body.classList.remove('fixed-logo')
    }
}

