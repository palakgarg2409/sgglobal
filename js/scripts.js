/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    const navbarCollapsible = document.body.querySelector('#mainNav');
    var navbarShrink = function () {
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
                navbarCollapsible.classList.add('navbar-shrink');
            }
            
        });
    });

});


var loader = document.getElementById("preloader");
loader.style.opacity = 1;
window.addEventListener("load", function(){
    setTimeout(() => {
        loader.style.opacity = 0;
    }, 1200);

    setTimeout(() => {
        loader.style.display = "none";
    }, 1400);
    
})

//footer
let footerElems = document.querySelectorAll(".footer-company-about");
let wrappers = document.querySelectorAll(".footer-about-wrapper");
let footerDropdowns = document.querySelectorAll(".footer-dropdown");
wrappers[0].addEventListener("mouseover", function(){
    footerElems[0].classList.add("footer-company-about-hover");
})
wrappers[0].addEventListener("mouseout", function(){
    footerElems[0].classList.remove("footer-company-about-hover");
})
wrappers[1].addEventListener("mouseover", function(){
    footerElems[1].classList.add("footer-company-about-hover");
})
wrappers[1].addEventListener("mouseout", function(){
    footerElems[1].classList.remove("footer-company-about-hover");
})
wrappers[0].addEventListener("focus", function(){
    footerElems[2].classList.add("footer-company-about-hover");
})
wrappers[0].addEventListener("blur", function(){
    footerElems[2].classList.remove("footer-company-about-hover");
})
wrappers[3].addEventListener("focus", function(){
    footerElems[3].classList.add("footer-company-about-hover");
})
wrappers[3].addEventListener("blur", function(){
    footerElems[3].classList.remove("footer-company-about-hover");
})

