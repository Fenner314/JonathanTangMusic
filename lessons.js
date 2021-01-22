//LOOP THROUGH STUDENT QUOTES
const quotes = document.getElementsByClassName('academy-quotes');

const time = 11000;
let quoteIndex = 0;

quotes[quoteIndex].classList.toggle('academy-quotes-active');

// setInterval(nextQuote, time);

const nextQuote = () => {
    quotes[quoteIndex].classList.toggle('academy-quotes-active');
    quoteIndex += 1;
    if (quoteIndex >= quotes.length) {quoteIndex = 0};
    quotes[quoteIndex].classList.toggle('academy-quotes-active');
}

setInterval(nextQuote, time);


//FIX BRASS ACADEMY LOGO TO TOP CORNER ON SCROLL

// const academy = document.querySelector('.academy-logo');
// const topOfAcademy = academy.offsetTop;
// let mobile = window.matchMedia('(max-width: 900px)');

// const fixAcademy = () => {
//     if (window.scrollY >= topOfAcademy) {
//         document.body.classList.add('fixed-logo');
//     } else {
//         document.body.classList.remove('fixed-logo');
//     }
// };

// document.addEventListener('scroll', fixAcademy);

// window.onload = () => {
//     if (mobile.matches) {
//         document.removeEventListener('scroll', fixAcademy);
//         document.body.classList.remove('fixed-logo')
//     }
// }

// window.onresize = () => {
//     mobile = window.matchMedia('(max-width: 900px)');
//     if (!mobile.matches) {    
//         document.addEventListener('scroll', fixAcademy);
//     } else {
//         document.removeEventListener('scroll', fixAcademy);
//         document.body.classList.remove('fixed-logo')
//     }
// }