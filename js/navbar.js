let scrollPos = window.scrollY; 
const navbar = document.getElementById("mainNav");
const navbarStyle = window.getComputedStyle(navbar);
const navbarWidthWithPadding = navbarStyle.getPropertyValue("height");
console.log(typeof(navbarWidthWithPadding));
console.log(navbarWidthWithPadding);

const screenWidth = window.screen.width;
console.log("Screen width:", screenWidth);

window.addEventListener('scroll', function(){
    const newScrollPos = window.scrollY;

    if(screenWidth > 700){
        if(scrollPos > newScrollPos){
            document.querySelector('.navbar').style.top="0px";
        }else{
            document.querySelector('.navbar').style.top= "-" + navbarWidthWithPadding;
        }
    }else{
        document.querySelector('.navbar').style.top="0px";
    }

    scrollPos = newScrollPos;
})