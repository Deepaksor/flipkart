const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
});

const goPrev = () => {
  counter--
  slideImage();
}

const goNext = () => {
  counter++
  if(counter>4){
    counter=0;
  }
  slideImage();
}
setInterval(slideImage,1000);
function slideImage(){
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
  });
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  });
}



