document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", revealOnScroll);
});

var sw = window.screen.width;

function revealOnScroll() {

    var box = document.getElementsByClassName("about-box")[0];
    var boxL = document.getElementsByClassName("left-lid")[0];
    var boxR = document.getElementsByClassName("right-lid")[0];
    var packet1 = document.getElementsByClassName("seed_packet")[0];
    var packet2 = document.getElementsByClassName("dry_packet")[0];
    var packet3 = document.getElementsByClassName("seed_packet2")[0];

    var box_pos = box.getBoundingClientRect();
    var viewportHeight = window.innerHeight;

    var H = box_pos.top;
    if(H >= (0.7*viewportHeight)){
        if(sw > 500){
            box.style.transform = "translateX(0vw)";
        }
        boxL.style.transform = "rotate(120deg)";
        boxR.style.transform = "rotate(240deg)";
        packet1.style.transform = "translate(0, -40px)";
        packet2.style.transform = "translate(30px, -50px)";
        packet3.style.transform = "translate(60px, -40px)";
    }else if (H < (0.7*viewportHeight) && H > (0.3*viewportHeight)) {
        var Xcalc = ((0.7*viewportHeight) - H)/(0.4*viewportHeight);
        if(sw > 500){
            box.style.transform = "translateX(" + Xcalc*70 + "vw)";
        }
        var Langle = 120 + (240*Xcalc);
        var Rangle = 240 - (240*Xcalc);

        boxL.style.transform = "rotate(" + Langle + "deg)";
        boxR.style.transform = "rotate(" + Rangle + "deg)";
        packet1.style.transform = "translate(0," +(-40)*(1-Xcalc) +"px)";
        packet2.style.transform = "translate(30px," +(-50)*(1-Xcalc) +"px)";
        packet3.style.transform = "translate(60px," +(-40)*(1-Xcalc) +"px)";
    }else{
        if(sw > 500){
            box.style.transform = "translateX(70vw)";
        }
        boxL.style.transform = "rotate(360deg)";
        boxR.style.transform = "rotate(0deg)";
        packet1.style.transform = "translate(0, 0)";
        packet2.style.transform = "translate(30px, 0)";
        packet3.style.transform = "translate(60px, 0)";
    }

    var ship = document.getElementsByClassName("ship")[0];
    var ship_pos = ship.getBoundingClientRect();
    var ship_H = ship_pos.top;
    if(sw > 500){
        if(ship_H >= (0.7*viewportHeight)){
            ship.style.transform = "translateX(65vw)";
        }else if(ship_H < (0.7*viewportHeight) && ship_H > (0.3*viewportHeight)) {
            var shipX = (ship_H - (0.3*viewportHeight))/(0.4 * viewportHeight);
            ship.style.transform = "translateX(" + shipX*65 + "vw)";
        }else{
            ship.style.transform = "translateX(0vw)";
        }
    }


    var truck = document.getElementsByClassName("truck")[0];
    var truck_pos = truck.getBoundingClientRect();
    var truckH = truck_pos.top;
    if(sw > 500){
        if(truckH >= (0.7*viewportHeight)){
            truck.style.transform = "translateX(0vw)";
        }else if (truckH < (0.7*viewportHeight) && truckH > (0.3*viewportHeight)) {
            var truckX = ((0.7*viewportHeight) - truckH)/(0.4*viewportHeight);
            truck.style.transform = "translateX(" + truckX*70 + "vw)";
        }else{
            truck.style.transform = "translateX(70vw)";
        }
    }

}

function makeCenter(cont, middle){
    let contW = cont.offsetWidth;
    let middleW = middle.offsetWidth;
    let leftPos = (contW - middleW)/2;
    middle.style.left = leftPos + "px";

    window.addEventListener('resize', function(){
        let contW = cont.offsetWidth;
        let middleW = middle.offsetWidth;
        let leftPos = (contW - middleW)/2;
        middle.style.left = leftPos + "px";
    })
}

const aboutlogo = document.getElementsByClassName("about-logo")[0];
const aboutsection = document.getElementsByClassName("about-sec")[0];
const aboutlogoback = document.getElementsByClassName("about-logo-back")[0];
makeCenter(aboutsection, aboutlogo);
makeCenter(aboutsection, aboutlogoback);

const ab = document.getElementsByClassName("ab")[0];
const ut = document.getElementsByClassName("ut")[0];
const abb = document.getElementsByClassName("abb")[0];
const utb = document.getElementsByClassName("utb")[0];

window.addEventListener("load", function(){
    const computedStyle = window.getComputedStyle(aboutlogoback);
    const left = computedStyle.getPropertyValue("left");
    const width = computedStyle.getPropertyValue("width");
    const logobackL = parseInt(left, 10);
    const logobackW = parseInt(width, 10);

    let abW = ab.offsetWidth;
    ab.style.left = (logobackL - abW - 5) + "px";
    ut.style.left = (logobackL + logobackW + 5) + "px";
    abb.style.left = (logobackL - abW - 5) + "px";
    utb.style.left = (logobackL + logobackW + 5) + "px";
})

window.addEventListener("resize", function(){
    const computedStyle = window.getComputedStyle(aboutlogoback);
    const left = computedStyle.getPropertyValue("left");
    const width = computedStyle.getPropertyValue("width");
    const logobackL = parseInt(left, 10);
    const logobackW = parseInt(width, 10);

    let abW = ab.offsetWidth;
    ab.style.left = (logobackL - abW - 5) + "px";
    ut.style.left = (logobackL + logobackW + 5) + "px";
    abb.style.left = (logobackL - abW - 5) + "px";
    utb.style.left = (logobackL + logobackW + 5) + "px";
})