let scrollPos = window.scrollY; 

window.addEventListener('scroll', function(){
    const newScrollPos = window.scrollY;

    if(scrollPos > newScrollPos){
        document.querySelector('.navbar').style.top="0px";
    }else{
        document.querySelector('.navbar').style.top="-100px";
    }

    scrollPos = newScrollPos;
})