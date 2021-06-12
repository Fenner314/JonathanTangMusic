//FIX HEADSHOT LOGO TO TOP CORNER ON SCROLL

const headshot = document.querySelector('.headshot-small');
const bioBanner = document.querySelector('.biography-background');
const activationHeight = bioBanner.offsetTop + bioBanner.offsetHeight;
let mobile = window.matchMedia('(max-width: 900px)');

headshot.style.opacity = 0;
window.onload = () => {
    headshot.classList.remove('no-transition');
}

const fixHeadshot = () => {
    if (window.scrollY >= activationHeight) {
        headshot.style.opacity = 1;
    } else {
        headshot.style.opacity = 0;
    }
};

window.addEventListener('scroll', fixHeadshot);

