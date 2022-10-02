// JavaScript Document


// JS Toast
$(document).ready(function(){
  $("#myBtn").click(function(){
	$('.toast').toast('show');
  });
});
// ********************


// JS Slideshow Gallery (code from W3Schools How To)
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slideshow-gallery-thumb");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// ********************


// Gallery Modal JS START
// Get the modal
var modal = document.getElementById("gallery-modal-container");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("gallery-modal-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("gallery-modal-caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("gallery-modal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// Gallery Modal JS END













