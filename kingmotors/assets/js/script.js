// ============== BYD ============== //
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides_1(n) {
  showSlides((slideIndex += n));
}
function currentSlide_1(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("extra-image-1");
  var dots = document.getElementsByClassName("byd");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// ============== VW ============== //
var slideIndex = 1;
showSlides1(slideIndex);
function plusSlides_2(n) {
  showSlides1((slideIndex += n));
}
function currentSlide_2(n) {
  showSlides1((slideIndex = n));
}
function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("extra-image-2");
  var dots = document.getElementsByClassName("vw");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// ============== LEAP ============== //
var slideIndex = 1;
showSlides2(slideIndex);
function plusSlides_3(n) {
  showSlides2((slideIndex += n));
}
function currentSlide_3(n) {
  showSlides2((slideIndex = n));
}
function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("extra-image-3");
  var dots = document.getElementsByClassName("leap");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// ============== TESLA ============== //
var slideIndex = 1;
showSlides3(slideIndex);
function plusSlides_4(n) {
  showSlides3((slideIndex += n));
}
function currentSlide_4(n) {
  showSlides3((slideIndex = n));
}
function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("extra-image-4");
  var dots = document.getElementsByClassName("tesla");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// ============== VOYAH ============== //
var slideIndex = 1;
showSlides4(slideIndex);
function plusSlides_5(n) {
  showSlides4((slideIndex += n));
}
function currentSlide_5(n) {
  showSlides4((slideIndex = n));
}
function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("extra-image-5");
  var dots = document.getElementsByClassName("voyah");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// ============== NETA ============== //
var slideIndex = 1;
showSlides5(slideIndex);
function plusSlides_6(n) {
  showSlides5((slideIndex += n));
}
function currentSlide_6(n) {
  showSlides5((slideIndex = n));
}
function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("extra-image-6");
  var dots = document.getElementsByClassName("neta");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// ============== JETOUR ============== //
var slideIndex = 1;
showSlides6(slideIndex);
function plusSlides_7(n) {
  showSlides6((slideIndex += n));
}
function currentSlide_7(n) {
  showSlides6((slideIndex = n));
}
function showSlides6(n) {
  var i;
  var slides = document.getElementsByClassName("extra-image-7");
  var dots = document.getElementsByClassName("jetour");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// ============== GEELY ============== //
var slideIndex = 1;
showSlides7(slideIndex);
function plusSlides_8(n) {
  showSlides7((slideIndex += n));
}
function currentSlide_8(n) {
  showSlides7((slideIndex = n));
}
function showSlides7(n) {
  var i;
  var slides = document.getElementsByClassName("extra-image-8");
  var dots = document.getElementsByClassName("geely");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
