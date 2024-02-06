// This adds some nice ellipsis to the description:
// document.querySelectorAll(".projcard-description").forEach(function(box) {
// 	$clamp(box, {clamp: 6});
// });
let products = document.querySelectorAll(".products")
for(let i = 0; i < products.length; i++){
	products[i].addEventListener("mouseover", function(p){
		products[i].getElementsByClassName("my-3")[0].style.color = "rgba(0, 0, 0, 0.5)"
		products[i].getElementsByClassName("my-3")[0].classList.toggle("underlinet")
		// products[i].getElementsByTagName("img")[0].style.width = "75%"
		products[i].getElementsByTagName("img")[0].style.opacity = "0.8"
	})
	products[i].addEventListener("mouseout", function(p){
		products[i].getElementsByClassName("my-3")[0].style.color = "#333"
		products[i].getElementsByClassName("my-3")[0].classList.toggle("underlinet")
		// products[i].getElementsByTagName("img")[0].style.width = "70%"
		products[i].getElementsByTagName("img")[0].style.opacity = "1"
	})
}

//filling form with required product
function getParameterByName(name, url){
	name = name.replace(/[\[\]]/g, "\\$&")
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	    results = regex.exec(url);
	if(!results) return null;
	if(!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function prefillForm(){
	let prod = getParameterByName('product', window.location.href)
	document.getElementById("producti").value = prod;
}

let popup1 = document.getElementById("popup1")
let closePopup1 = document.getElementById("closePopup1")
products[0].addEventListener("click", function(){
	popup1.showModal();
})
closePopup1.addEventListener("click", function(){
	popup1.close();
})

let popup2 = document.getElementById("popup2")
let closePopup2 = document.getElementById("closePopup2")
products[1].addEventListener("click", function(){
	popup2.showModal();
})
closePopup2.addEventListener("click", function(){
	popup2.close();
})

let popup3 = document.getElementById("popup3")
let closePopup3 = document.getElementById("closePopup3")
products[2].addEventListener("click", function(){
	popup3.showModal();
})
closePopup3.addEventListener("click", function(){
	popup3.close();
})

let popup4 = document.getElementById("popup4")
let closePopup4 = document.getElementById("closePopup4")
products[3].addEventListener("click", function(){
	popup4.showModal();
})
closePopup4.addEventListener("click", function(){
	popup4.close();
})

let popup5 = document.getElementById("popup5")
let closePopup5 = document.getElementById("closePopup5")
products[4].addEventListener("click", function(){
	popup5.showModal();
})
closePopup5.addEventListener("click", function(){
	popup5.close();
})

let popup11 = document.getElementById("popup11")
let closePopup11 = document.getElementById("closePopup11")
products[5].addEventListener("click", function(){
	popup11.showModal();
})
closePopup11.addEventListener("click", function(){
	popup11.close();
})

let popup12 = document.getElementById("popup12")
let closePopup12 = document.getElementById("closePopup12")
products[6].addEventListener("click", function(){
	popup12.showModal();
})
closePopup12.addEventListener("click", function(){
	popup12.close();
})

let popup13 = document.getElementById("popup13")
let closePopup13 = document.getElementById("closePopup13")
products[7].addEventListener("click", function(){
	popup13.showModal();
})
closePopup13.addEventListener("click", function(){
	popup13.close();
})

let popup14 = document.getElementById("popup14")
let closePopup14 = document.getElementById("closePopup14")
products[8].addEventListener("click", function(){
	popup14.showModal();
})
closePopup14.addEventListener("click", function(){
	popup14.close();
})

let popup15 = document.getElementById("popup15")
let closePopup15 = document.getElementById("closePopup15")
products[9].addEventListener("click", function(){
	popup15.showModal();
})
closePopup15.addEventListener("click", function(){
	popup15.close();
})

let popup16 = document.getElementById("popup16")
let closePopup16 = document.getElementById("closePopup16")
products[10].addEventListener("click", function(){
	popup16.showModal();
})
closePopup16.addEventListener("click", function(){
	popup16.close();
})

let popup17 = document.getElementById("popup17")
let closePopup17 = document.getElementById("closePopup17")
products[11].addEventListener("click", function(){
	popup17.showModal();
})
closePopup17.addEventListener("click", function(){
	popup17.close();
})