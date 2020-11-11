//NAVIGATION 

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.getElementById('myNav');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        navBar.classList.toggle('navbar-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle'); 

        //Nav Background Animation

    }); 
};


navSlide();

//IMAGE GALLERY SLIDER
const imgScroll = () => {
    const rightArrow = document.getElementById('right');
    const leftArrow = document.getElementById('left');
    const imgContainer = document.querySelector('.image-container')
    const imgOne = document.getElementById('slider-image-1');
    const imgTwo = document.getElementById('slider-image-2');
    const imgThree = document.getElementById('slider-image-3');
    const imgFour = document.getElementById('slider-image-4');
    const imgFive = document.getElementById('slider-image-5');
    const imgSix = document.getElementById('slider-image-6');
    const imgSeven = document.getElementById('slider-image-7');
    const imgEight = document.getElementById('slider-image-8');
    const imgNine = document.getElementById('slider-image-9');
    const imgTen = document.getElementById('slider-image-10');
    const imgEleven = document.getElementById('slider-image-11');
    const amount = 600;
    let initial = 0;


    rightArrow.onclick = function() {
        initial += amount;
        imgContainer.style.transform = 'translateX(-' + initial + 'px)';
    }

    leftArrow.onclick = function() {
        initial -= amount;
        imgContainer.style.transform = 'translateX(-' + initial + 'px)';
    }

    if (initial = 0) {
        leftArrow.style.display = "none";
    } 

    imgOne.onclick = function() {
        initial = 0;
    }
    imgTwo.onclick = function() {
        initial = 600;
    }
    imgThree.onclick = function() {
        initial = 1200;
    }
    imgFour.onclick = function() {
        initial = 1800;
    }
    imgFive.onclick = function() {
        initial = 2400;
    }
    imgSix.onclick = function() {
        initial = 3000;
    }
    imgSeven.onclick = function() {
        initial = 3600;
    }
    imgEight.onclick = function() {
        initial = 4200;
    }
    imgNine.onclick = function() {
        initial = 4800;
    }
    imgTen.onclick = function() {
        initial = 5400;
    }
    imgEleven.onclick = function() {
        initial = 6000;
    }

}

imgScroll();
