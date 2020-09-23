// /*const sliderSlide = document.querySelector('.slider-image');
// const sliderImages = document.querySelectorAll('.slider-image img');

// //Buttons

// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// //Counter
// let counter = 1;
// //gives original width back
// const size  = sliderImages[0].clientWidth;

// //Start on the first image, not the duplicate one
// sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// //Button Listener
// nextBtn.addEventListener('click',()=>{
//     if(counter >= sliderImages.length - 1)return;       
//     sliderSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prevBtn.addEventListener('click',()=>{
//     if(counter <= 0) return;
//     sliderSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// sliderSlide.addEventListener('transitionend', ()=>{
//     if(sliderImages[counter].id === 'lastClone'){
//         sliderSlide.style.transition = "none";
//         counter = sliderImages.length - 2;
//         sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if(sliderImages[counter].id === 'firstClone'){
//         sliderSlide.style.transition = "none";
//         counter = sliderImages.length - counter;
//         sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });*/

// var slider_content = document.getElementById('box');
// //contain images in an array
// var image = ['apple', 'banana', 'cherry', 'pear'];

// var i = image.length;

// //function for next slide

// function nextImage(){
//     if(i<image.length){
//         i = i+1;
//     }else {
//         i = 1;
//     }
//         //slider_content.innerHTML = "<img src="+image[i-1]+".jpg";
//         slider_content.innerHTML = "<img src= img/" +image[i-1]+".jpg>";
// }

// //function for prev slide

// function prevImage(){
//     if(i<image.length+1 && i>1){
//         i = i-1;
//     }else {
//         i = image.length;
//     }
//         slider_content.innerHTML = "<img src= img/"+image[i-1]+".jpg>";
// }

// setInterval(nextImage, 6000);


// //Animation Section

// const hero = document.querySelector('.hero');
// const slider_woosh = document.querySelector('.slider-woosh');
// const logo = document.querySelector('#logo');
// const rightIcons = document.querySelector('.right-icons');
// const headline = document.querySelector('.headline');

// //This is the Timeline for desktop view
// const tl = new TimelineMax();

// //This is a new Timeline for mobile view
// const tl1 = new TimelineMax();


// function gsap(x) {
//     //Mobile View
//     if (x.matches) {
//         //The "-=1.2" means to have the animation start 1.2 seconds earlier

//         tl1.fromTo(hero,1, {height: "0%"}, {height: "80%", ease:Power2.easeInOut})
//         .fromTo(hero, 1.2, {width: "0%"}, {width: "100%", ease:Power2.easeInOut})
//         .fromTo(slider_woosh, 1.2, {x:"-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
//         .fromTo(logo, 0.5, {opacity: 0, x: -30, y: -5}, {opacity: 1, x: -15}, "-=0.5")
//         .fromTo(rightIcons, 0.5, {opacity: 0, x: 30, y: -5}, {opacity: 1, x: -15}, "-=0.5")
//         .fromTo(headline, 0.5, {opacity: 0}, {opacity: 100 }, "-=0.2");



//     } //Desktop View
//     else {

//         tl.fromTo(hero,1, {height: "0%"}, {height: "80%", ease:Power2.easeInOut})
//         .fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease:Power2.easeInOut})
//         .fromTo(slider_woosh, 1.2, {x:"-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
//         .fromTo(logo, 0.5, {opacity: 0, x: -30}, {opacity: 1, x: 0}, "-=0.5")
//         .fromTo(rightIcons, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: -15}, "-=0.5")
//         .to(headline, 0.5, {opacity: 100, x: 50},"-=0.5");
//     }
// }

// var x = window.matchMedia("(max-width: 850px)");
// gsap(x) //Calls the method at runtime
// x.addEventListener(gsap); //Attach function on state changes



