const btnClair = document.querySelector(".light");
const btnSombre = document.querySelector(".Dark");

document.body.style.color="white"

console.log(btnClair,btnSombre)

btnClair.addEventListener('click', function() {
    console.log("Clair")
    btnSombre.style.opacity = 1 ,
    btnClair.style.opacity = 0 ,
    document.body.style.backgroundColor = "white" 
    document.body.style.color = "black" 
});

btnSombre.addEventListener('click', function() {
    console.log("Sombre")
    btnSombre.style.opacity = 0 ,
    btnClair.style.opacity = 1 ,
    document.body.style.backgroundColor = "rgb(26, 25, 25)" 
    document.body.style.color = "white" 
});




const slides = document.querySelectorAll(".slide");// images
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
let curSlide = 0; // currentSlide
let maxSlide = slides.length - 1; 

console.log(nextSlide, prevSlide)

//Slide suivante
nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) curSlide = 0; // Remise a slide 0
        else curSlide++;

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`; // Deplace coord X pour les slides
    });
});

//Slide precedente 
prevSlide.addEventListener("click", function () {
    if (curSlide === 0) curSlide = maxSlide; // Remise a slide 0
        else curSlide--;


    slides.forEach((slide, indx) => { 
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`; // Deplace coord X pour les slides
    });
});
