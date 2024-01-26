sliders = document.getElementsByClassName("p-slider");
sliderContainers = document.getElementsByClassName("cont");
// counter = 0
products1 = sliders[0].querySelectorAll(".products");
products2 = sliders[1].querySelectorAll(".products");
// // function sl(){
// //     products[0].remove();
// // }
// // sliders[0].style.transform = "translateX(-250px)";
// // setTimeout(sl, 4000);

// function clearI(d){
//     setTimeout(function(){
//         sliders[0].querySelectorAll(".products")[d].remove();
//         counter -= 1;
//     },2000);
// }

// setInterval(function(){
//     // sliders[0].querySelectorAll(".products")[counter].innerHTML = "";
//     // sliders[0].querySelectorAll(".products")[counter].width = "0";
//     sliders[0].appendChild(sliders[0].querySelectorAll(".products")[counter]);
//     clearI(counter);
//     counter += 1;
//     // clearI(sliders[0].querySelectorAll(".products")[counter]);
//     // counter += 1;
// }, 1000);

const slideW = products1[0].offsetWidth;
let slides1 = products1.length;
let slides2 = products2.length;
let counter1 = 0;
let counter2 = 0;

const frameW1 = slides1 * slideW;
const frameW2 = slides2 * slideW;

function nextSlide1(){
    counter1 = (counter1 + 1) % slides1;
    playSlider1();
}

function playSlider1(){
    const offset1 = -1 * counter1 * slideW;
    sliders[0].style.transform = 'translateX(' + offset1 + 'px)';

    lastVisiblePosition = offset1 + frameW1;
    if(lastVisiblePosition + slideW < sliderContainers[0].offsetWidth){
        setTimeout(() => {
            counter1 = slides1;
            sliders[0].style.transform = "translateX(0px)";
        }, 50);
    }

}

function nextSlide2(){
    counter2 = (counter2 + 1) % products2.length;
    playSlider2();
}

function playSlider2(){
    const offset2 = -1 * counter2 * slideW;
    sliders[1].style.transform = 'translateX(' + offset2 + 'px)';

    lastVisiblePosition = offset2 + frameW2;
    if(lastVisiblePosition + slideW < sliderContainers[1].offsetWidth){
        setTimeout(() => {
            counter2 = slides2;
            sliders[1].style.transform = "translateX(0px)";
        }, 50);
    }
}

setInterval(function(){
    nextSlide1();
    nextSlide2();
}, 3000);

//adding draggable feature
let startX = 0;
let isDragging = false;
sliders[0].addEventListener('touchstart', (e)=>{
    isDragging = true;
    startX = e.touches[0].clientX;
});

sliders[0].addEventListener('touchmove', (e)=>{
    if(!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    sliders[0].style.transform = 'translateX(' + -(counter1 * slideW) + diffX + 'px)';
})

sliders[0].addEventListener('touchend', (e)=>{
    isDragging = false;
    const currentX = e.changedTouches[0].clientX;
    const diffX = currentX - startX;
    if(Math.abs(diffX) > slideW / 4){
        if(diffX > 0){
            counter1 = Math.max(counter1 - 1, 0);
        }else{
            counter1 = Math.min(counter1 + 1, slides1 - 1);
        }
    }
    playSlider1();
})
