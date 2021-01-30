//NAVIGATION 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.getElementById('myNav');
    const tint = document.querySelector('.tint');
    const body = document.body;
    const notNav = document.querySelector('.not-nav');

    navBar.classList.add('.nav-toggle');

    burger.addEventListener('click', () => {
        //Toggle Nav
        tint.classList.toggle('tint-active');
        nav.classList.toggle('nav-active');
        navBar.classList.toggle('nav-toggle');
        navBar.classList.toggle('navbar-active');
        body.classList.toggle('no-scroll');
        notNav.classList.toggle('content-inactive');


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
        
        let happened = true;
        let clickX = burger.classList.value === 'burger'

        window.onresize = () => {
            mobile = window.matchMedia('(max-width: 900px)');
            if (!mobile.matches && happened) {    
                tint.classList.remove('tint-active');
                nav.classList.remove('nav-active');
                navBar.classList.remove('nav-toggle');
                navBar.classList.remove('navbar-active');
                body.classList.remove('no-scroll');
                notNav.classList.remove('content-inactive');
                burger.classList.remove('toggle');
                navLinks.forEach((link, index) => {
                    if(link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    }
                });
                happened = false;
            } else {
              
            }
        }

        if (clickX) {
            happened = false;
        }

    }); 
};


const navbarChange = () => {
    const navbar = document.getElementById('myNav');

    const navbarGray = () => {
        if (window.scrollY > 0) {
            document.body.classList.add('navbar-change');
        } else {
            document.body.classList.remove('navbar-change');
        }
    }

    document.addEventListener('scroll', navbarGray)
}



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
    navbarChange();
};

document.addEventListener('DOMContentLoaded', function(e) {app()})

window.onresize = () => console.log(window.innerWidth);