//LOOP THROUGH STUDENT QUOTES
const quotes = document.getElementsByClassName('academy-quotes');
const activeQuote = document.querySelector('.academy-quotes.academy-quotes-active');
const back = document.querySelector('.academy-background');

const time = 10000;
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

// function onClick(e) {
//     const clickTarget = e.target;
//     const clickTargetWidth = clickTarget.offsetWidth;
//     const xCoordInClickTarget = e.clientX - clickTarget.getBoundingClientRect().left;
//     if (clickTargetWidth / 2 > xCoordInClickTarget) {
//       console.log(left)
//     } else {
//       console.log(right)
//     }
//   };


//FIX BRASS ACADEMY LOGO TO TOP CORNER ON SCROLL

const logo = document.querySelector('.academy-logo-small');
const lessonsBanner = document.querySelector('.academy-background');
const navbar = document.querySelector('.myNav');
const activationHeight = lessonsBanner.offsetTop + lessonsBanner.offsetHeight - navbar.offsetHeight;
let mobile = window.matchMedia('(max-width: 900px)');

logo.style.opacity = 0;

window.onload = () => {
    logo.classList.remove('no-transition');

    if (mobile.matches) {
        document.removeEventListener('scroll', fixAcademy);
        logo.style.opacity = 0;
    }
}

window.onresize = () => {
    if (!mobile.matches && window.scrollY >= activationHeight) { 
        logo.style.opacity = 1; 
        document.addEventListener('scroll', fixAcademy);
    } else if (!mobile.matches) {  
        document.addEventListener('scroll', fixAcademy);
    } else {
        document.removeEventListener('scroll', fixAcademy);
        logo.style.opacity = 0;
    }
}

