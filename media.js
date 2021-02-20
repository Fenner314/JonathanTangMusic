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
    const sliderButtons = [btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine, btnTen, btnEleven]
    const buttons = document.getElementsByClassName('slider-button');
    const amount = 600;
    let initial = 0;
    let counter = 0;

    const tablet = window.matchMedia('(max-width: 900px)');
    const mobile = window.matchMedia('(max-width: 575px)');

    rightArrow.onclick = function() {
        initial += amount;
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-' + (initial / 3) + 'px)';
        } else if (tablet.matches) {
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
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter += 1;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };

    leftArrow.style.visibility = 'hidden';

    leftArrow.onclick = function() {
        initial -= amount;
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-' + (initial / 3) + 'px)';
        } else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-' + (initial / 2) + 'px)';
        } else {
            imgContainer.style.transform = 'translateX(-' + initial + 'px)';
        }
        imgContainer.style.transitionDuration = 'left 2s';
        if (initial <= 0) {
            leftArrow.style.visibility = 'hidden';
        }; 
        rightArrow.style.visibility = 'visible';
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter -= 1;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };

    // buttons.onclick = function() {
    //     buttons.classList.toggle('slider-button-active');
    // }

    btnOne.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(0px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(0px)';
        } else {
            imgContainer.style.transform = 'translateX(0px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'hidden';
        rightArrow.style.visibility = 'visible';
        initial = 0; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 0;
        sliderButtons[counter].classList.toggle('slider-button-active');
        // if (sliderButtons.every(function(btn){return btn.classList = 'slider-button'})) {
        //     sliderButtons[counter].classList.toggle('slider-button-reset');
        // } 
    };
    
    btnTwo.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-200px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-300px)';
        } else {
            imgContainer.style.transform = 'translateX(-600px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 600; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 1;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };
    
    btnThree.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-400px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-600px)';
        } else {
            imgContainer.style.transform = 'translateX(-1200px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 1200; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 2;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };
    
    btnFour.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-600px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-900px)';
        } else {
            imgContainer.style.transform = 'translateX(-1800px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 1800; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 3;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };
    
    btnFive.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-800px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-1200px)';
        } else {
            imgContainer.style.transform = 'translateX(-2400px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 2400; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 4;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };
    
    btnSix.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-1000px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-1500px)';
        } else {
            imgContainer.style.transform = 'translateX(-3000px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 3000; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 5;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };
    
    btnSeven.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-1200px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-1800px)';
        } else {
            imgContainer.style.transform = 'translateX(-3600px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 3600; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 6;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };
    
    btnEight.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-1400px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-2100px)';
        } else {
            imgContainer.style.transform = 'translateX(-4200px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 4200; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 7;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };
    
    btnNine.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-1600px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-2400px)';
        } else {
            imgContainer.style.transform = 'translateX(-4800px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 4800; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 8;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };
    
    btnTen.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-1800px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-2700px)';
        } else {
            imgContainer.style.transform = 'translateX(-5400px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible';
        initial = 5400; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 9;
        sliderButtons[counter].classList.toggle('slider-button-active');
    };
    
    btnEleven.onclick = function() {
        if (mobile.matches) {
            imgContainer.style.transform = 'translateX(-2000px)';
        }else if (tablet.matches) {
            imgContainer.style.transform = 'translateX(-3000px)';
        } else {
            imgContainer.style.transform = 'translateX(-6000px)';
        };
        imgContainer.style.transitionDuration = 'left 2s';
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'hidden';
        initial = 6000; 
        sliderButtons[counter].classList.toggle('slider-button-active');
        counter = 10;
        sliderButtons[counter].classList.toggle('slider-button-active');
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

imgScroll();