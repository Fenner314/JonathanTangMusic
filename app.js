//NAVIGATION 

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.getElementById('myNav');
    const tint = document.querySelector('.tint');
    const body = document.body;

    burger.addEventListener('click', () => {

        //Toggle Nav
        tint.classList.toggle('tint-active');
        nav.classList.toggle('nav-active');
        nav.style.pointerEvents = 'all';
        navBar.classList.toggle('navbar-active');
        body.classList.toggle('no-scroll');


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
        
        

    }); 
};



//IMAGE GALLERY SLIDER
const imgScroll = () => {
    const rightArrow = document.getElementById('right');
    const leftArrow = document.getElementById('left');
    const imgContainer = document.querySelector('.image-container');
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
    const btnOne = document.getElementById('slider-button-1');
    const btnTwo = document.getElementById('slider-button-2');
    const btnThree = document.getElementById('slider-button-3');
    const btnFour = document.getElementById('slider-button-4');
    const btnFive = document.getElementById('slider-button-5');
    const btnSix = document.getElementById('slider-button-6');
    const btnSeven = document.getElementById('slider-button-7');
    const btnEight = document.getElementById('slider-button-8');
    const btnNine = document.getElementById('slider-button-9');
    const btnTen = document.getElementById('slider-button-10');
    const btnEleven = document.getElementById('slider-button-11');
    const amount = 600;
    let initial = 0;
    let counter = 0;

    const mobile = window.matchMedia('(max-width: 760px)');

    rightArrow.onclick = function() {
        initial += amount;
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-' + (initial / 2) + 'px)';
        } else {
            imgContainer.style.transform = 'translateX(-' + initial + 'px)';
        }
        imgContainer.style.transitionProperty = 'transform';
        imgContainer.style.transitionDuration = 'left 2s';
        if (initial >= 6000) {
            rightArrow.style.visibility = 'hidden';
        };
        leftArrow.style.visibility = 'visible';
        counter += 1;
    };

    leftArrow.style.visibility = 'hidden';

    leftArrow.onclick = function() {
        initial -= amount;
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-' + (initial / 2) + 'px)';
        } else {
            imgContainer.style.transform = 'translateX(-' + initial + 'px)';
        }
        imgContainer.style.transitionDuration = 'left 2s';
        if (initial <= 0) {
            leftArrow.style.visibility = 'hidden';
        }; 
        rightArrow.style.visibility = 'visible';
        counter -= 1;
    };

    btnOne.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(0px)';
        } else {
            imgContainer.style.transform = 'translateX(0px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'hidden';
        rightArrow.style.visibility = 'visible';
        initial = 0; 
        counter = 0;
    };
    
    btnTwo.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-300px)';
        } else {
            imgContainer.style.transform = 'translateX(-600px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 600; 
        counter = 1;
    };
    
    btnThree.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-600px)';
        } else {
            imgContainer.style.transform = 'translateX(-1200px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 1200; 
        counter = 2;
    };
    
    btnFour.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-900px)';
        } else {
            imgContainer.style.transform = 'translateX(-1800px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 1800; 
        counter = 3;
    };
    
    btnFive.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-1200px)';
        } else {
            imgContainer.style.transform = 'translateX(-2400px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 2400; 
        counter = 4;
    };
    
    btnSix.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-1500px)';
        } else {
            imgContainer.style.transform = 'translateX(-3000px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 3000; 
        counter = 5;
    };
    
    btnSeven.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-1800px)';
        } else {
            imgContainer.style.transform = 'translateX(-3600px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 3600; 
        counter = 6;
    };
    
    btnEight.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-2100px)';
        } else {
            imgContainer.style.transform = 'translateX(-4200px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 4200; 
        counter = 7;
    };
    
    btnNine.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-2400px)';
        } else {
            imgContainer.style.transform = 'translateX(-4800px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 4800; 
        counter = 8;
    };
    
    btnTen.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-2700px)';
        } else {
            imgContainer.style.transform = 'translateX(-5400px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 5400; 
        counter = 9;
    };
    
    btnEleven.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-3000px)';
        } else {
            imgContainer.style.transform = 'translateX(-6000px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'hidden';
        initial = 6000; 
        counter = 10;
    };
    
    
    

    // imgOne.onclick = function() {
    //     initial = 0;
    // }
    // imgTwo.onclick = function() {
    //     initial = 600;
    // }
    // imgThree.onclick = function() {
    //     initial = 1200;
    // }
    // imgFour.onclick = function() {
    //     initial = 1800;
    // }
    // imgFive.onclick = function() {
    //     initial = 2400;
    // }
    // imgSix.onclick = function() {
    //     initial = 3000;
    // }
    // imgSeven.onclick = function() {
    //     initial = 3600;
    // }
    // imgEight.onclick = function() {
    //     initial = 4200;
    // }
    // imgNine.onclick = function() {
    //     initial = 4800;
    // }
    // imgTen.onclick = function() {
    //     initial = 5400;
    // }
    // imgEleven.onclick = function() {
    //     initial = 6000;
    // }

};




// Initialize and add the map
function initMap() {
    // The location of Uluru
    const ccm = { lat: 39.130005, lng: -84.517865 };
    // The map, centered at CCM
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11.5,
      center: ccm,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: ccm,
      map: map,
    });
  }

const app = () => {
    navSlide();
    imgScroll();
    initMap();
};

app();

