var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// ,,,..........................

latestProjects();
function latestProjects(){
    document.querySelector('.project1').addEventListener('mouseover', function(e){
        document.querySelector('.project1').classList.add('black-color');
        
        
    })
    document.querySelector('.project1').addEventListener('mouseout', function(e){
        document.querySelector('.project1').classList.remove('black-color');
    })
    document.querySelector('.project2').addEventListener('mouseover', function(e){
        document.querySelector('.project2').classList.add('black-color');
        
        
    })
    document.querySelector('.project2').addEventListener('mouseout', function(e){
        document.querySelector('.project2').classList.remove('black-color');

    })
    document.querySelector('.project3').addEventListener('mouseover', function(e){
        document.querySelector('.project3').classList.add('black-color');
    })
    document.querySelector('.project3').addEventListener('mouseover', function(e){
        document.querySelector('.project3').classList.add('black-color');
        
    })
    document.querySelector('.project4').addEventListener('mouseover', function(e){
        document.querySelector('.project4').classList.add('black-color');
        
        
    })
    document.querySelector('.project4').addEventListener('mouseout', function(e){
        document.querySelector('.project4').classList.remove('black-color');
    })
    document.querySelector('.project5').addEventListener('mouseover', function(e){
        document.querySelector('.project5').classList.add('black-color');
        
    })
    document.querySelector('.project5').addEventListener('mouseout', function(e){
        document.querySelector('.project5').classList.remove('black-color');
    })
    document.querySelector('.project6').addEventListener('mouseover', function(e){
        document.querySelector('.project6').classList.add('black-color');
        
        
    })
    document.querySelector('.project6').addEventListener('mouseout', function(e){
        document.querySelector('.project6').classList.remove('black-color');
    })
}

document.querySelector('.all').addEventListener('mouseover', function(){
    document.querySelector('.project1').classList.add('black-color');
    document.querySelector('.project2').classList.add('black-color');
    document.querySelector('.project3').classList.add('black-color');
    document.querySelector('.project4').classList.add('black-color');
    document.querySelector('.project5').classList.add('black-color');
    document.querySelector('.project6').classList.add('black-color');
    })

    document.querySelector('.calculator').addEventListener('mouseover', function(){
        document.querySelector('.project1').classList.add('black-color');
       
    })
    document.querySelector('.calculator').addEventListener('mouseout', function(e){
        document.querySelector('.project1').classList.remove('black-color');
    })
    document.querySelector('.last-slider').addEventListener('mouseover', function(){
        document.querySelector('.project2').classList.add('black-color');
    })
    document.querySelector('.last-slider').addEventListener('mouseout', function(e){
        document.querySelector('.project2').classList.remove('black-color');
    })
    document.querySelector('.Design').addEventListener('mouseover', function(){
        document.querySelector('.project3').classList.add('black-color');
    })
    document.querySelector('.Design').addEventListener('mouseout', function(e){
        document.querySelector('.project3').classList.remove('black-color');
    })
    
    document.querySelector('.Logo').addEventListener('mouseover', function(){
        document.querySelector('.project4').classList.add('black-color');
    })
    document.querySelector('.Logo').addEventListener('mouseout', function(e){
        document.querySelector('.project4').classList.remove('black-color');
    })
    document.querySelector('.Presentation').addEventListener('mouseover', function(){
        document.querySelector('.project5').classList.add('black-color');
    })
    document.querySelector('.Presentation').addEventListener('mouseout', function(e){
        document.querySelector('.project5').classList.remove('black-color');
    })
    document.querySelector('.Icons').addEventListener('mouseover', function(){
        document.querySelector('.project6').classList.add('black-color');
    })
    document.querySelector('.Icons').addEventListener('mouseout', function(e){
        document.querySelector('.project6').classList.remove('black-color');
    })