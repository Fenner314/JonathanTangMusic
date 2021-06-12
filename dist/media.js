const mobile = window.matchMedia('(max-width: 600px)');

new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: mobile.matches ? true : false,
    scrollLock: true,
    duration: 1.5,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});
