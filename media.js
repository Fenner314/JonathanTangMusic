new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    scrollLock: true,
    duration: 1.5,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});
