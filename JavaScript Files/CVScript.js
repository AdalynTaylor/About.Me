window.addEventListener("scroll", function(){
  var header = document.querySelector("navBar");
  header.classList.toggle("sticky", window.scrollY > 0)
})

function printPage(){
  window.print;
}