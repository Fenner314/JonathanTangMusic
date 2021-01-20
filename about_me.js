//FIX HEADSHOT LOGO TO TOP CORNER ON SCROLL

const headshot = document.getElementById('headshot');
const topOfHeadshot = headshot.offsetTop;
console.log(topOfHeadshot);
let mobile = window.matchMedia('(max-width: 900px)');

const fixHeadshot = () => {
    if (window.scrollY >= topOfHeadshot) {
        document.body.classList.add('fixed-headshot');
    } else {
        document.body.classList.remove('fixed-headshot');
    }
};

window.addEventListener('scroll', fixHeadshot);

// window.onresize = () => {
//     mobile = window.matchMedia('(max-width: 900px)');
//     if (!mobile.matches) {    
//         document.addEventListener('scroll', fixHeadshot);
//     } else {
//         document.removeEventListener('scroll', fixHeadshot);
//         document.body.classList.remove('fixed-logo')
//     }
// }
