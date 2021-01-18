//NAVIGATION 

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.getElementById('myNav');
    const tint = document.querySelector('.tint');
    const body = document.body;
    const notNav = document.querySelector('.not-nav');

    burger.addEventListener('click', () => {

        //Toggle Nav
        tint.classList.toggle('tint-active');
        nav.classList.toggle('nav-active');
        // nav.style.pointerEvents = 'auto';
        navBar.classList.toggle('navbar-active');
        body.classList.toggle('no-scroll');
        notNav.classList.toggle('content-inactive')


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

//FIX HEADSHOT TO TOP CORNER ON SCROLL
// const headshot = document.getElementById('headshot');
// const topOfHeadshot = headshot.offsetTop;

// const fixHeadshot = () => {
//     if (window.scrollY >= topOfHeadshot) {
//         document.body.classList.add('fixed-headshot');
//     } else {
//         document.body.classList.remove('fixed-headshot');
//     }
// };

// window.addEventListener('scroll', fixHeadshot);



//IMAGE GALLERY SLIDER




// Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const ccm = { lat: 39.130005, lng: -84.517865 };
//     // The map, centered at CCM
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 11.5,
//       center: ccm,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: ccm,
//       map: map,
//     });
//   }

const app = () => {
    navSlide();
    
    console.log('hello')
    // initMap();
};

document.addEventListener('DOMContentLoaded', function(e) {app()})
