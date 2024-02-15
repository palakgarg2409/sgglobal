var sliders = document.getElementsByClassName("p-slider");
var sliderContainers = document.getElementsByClassName("cont");
var product = [sliders[0].querySelectorAll(".products"), sliders[1].querySelectorAll(".products")];
const slideW = product[0][0].offsetWidth;
const slides = [product[0].length, product[1].length];
let counter = [0, 0];
let dryL = document.getElementsByClassName("dry-left")[0];
let dryR = document.getElementsByClassName("dry-right")[0];
let seedL = document.getElementsByClassName("seeds-left")[0];
let seedR = document.getElementsByClassName("seeds-right")[0];

const frameW = [slides[0] * slideW, slides[1] * slideW];
let offset = [0, 0];

function nextSlide(i){
    counter[i] = (counter[i] + 1) % slides[i];
    NplaySlider(i);
}

function prevSlide(i){
    counter[i] = (counter[i] - 1 + slides[i]) % slides[i];
    PplaySlider(i);
}

function NplaySlider(i){
    offset[i] = -1 * counter[i] * slideW;
    sliders[i].style.transform = 'translateX(' + offset[i] + 'px)';

    var lastVisiblePosition = offset[i] + frameW[i];
    if(lastVisiblePosition + slideW < sliderContainers[i].offsetWidth){
        setTimeout(() => {
            counter[i] = slides[i];
            sliders[i].style.transform = "translateX(0px)";
        }, 50);
    }
}

function PplaySlider(i){
    offset[i] = -1 * counter[i] * slideW;
    var lastVisiblePosition = offset[i] + frameW[i];
    while(lastVisiblePosition + slideW < sliderContainers[i].offsetWidth){
        counter[i] -- ;
        offset[i] = -1 * counter[i] * slideW;
        lastVisiblePosition = offset[i] + frameW[i];
    }
    sliders[i].style.transform = 'translateX(' + offset[i] + 'px)';
}

let Id = [0,0]
Id[0] = setInterval(function(){nextSlide(0)}, 3000);
Id[1] = setInterval(function(){nextSlide(1)}, 3000);

let startX = [0, 0];
let isDragging = [false, false];
let currentX = [0, 0];
let diffX = [0, 0];

for (let i = 0; i < 2; i++) {
    if (!sliders[i]) continue;

    sliders[i].addEventListener('touchstart', (e) => {
        isDragging[i] = true;
        startX[i] = e.touches[0].clientX;
        clearInterval(Id[i]);
    });

    sliders[i].addEventListener('touchmove', (e) => {
        if (!isDragging[i]) return;
        currentX[i] = e.touches[0].clientX;
        diffX[i] = currentX[i] - startX[i];
        sliders[i].style.transform = 'translateX(' + (-(counter[i] * slideW) + diffX[i]) + 'px)';
    });

    sliders[i].addEventListener('touchend', (e) => {
        isDragging[i] = false;
        currentX[i] = e.changedTouches[0].clientX;
        diffX[i] = currentX[i] - startX[i];
        if (Math.abs(diffX[i]) > slideW / 4) {
            if (diffX[i] > 0) {
                counter[i] = Math.max(counter[i] - 1, 0);
            } else {
                counter[i] = Math.min(counter[i] + 1, slides[i] - 1);
            }
        }
        NplaySlider(i);
        Id[i] = setInterval(() => { nextSlide(i) }, 3000);
    });

    sliders[i].addEventListener('focus', () => {
        clearInterval(Id[i]);
    });

    sliders[i].addEventListener('blur', () => {
        Id[i] = setInterval(() => { nextSlide(i); }, 3000);
    });
}


sliders[0].addEventListener('focus', ()=>{
    clearInterval(Id[0]);
})

sliders[0].addEventListener('blur', ()=>{
    Id[0] = setInterval(()=>{nextSlide(0);}, 3000);
})

dryL.addEventListener("click", function(){
    clearInterval(Id[0]);
    prevSlide(0);
    Id[0] = setInterval(function(){nextSlide(0);}, 3000);
})

dryR.addEventListener("click", function(){
    clearInterval(Id[0]);
    nextSlide(0);
    Id[0] = setInterval(function(){nextSlide(0);}, 3000);
})

seedL.addEventListener("click", function(){
    clearInterval(Id[1]);
    prevSlide(1);
    Id[1] = setInterval(function(){nextSlide(1);}, 3000);
})

seedR.addEventListener("click", function(){
    clearInterval(Id[1]);
    nextSlide(1);
    Id[1] = setInterval(function(){nextSlide(1);}, 3000);
})
