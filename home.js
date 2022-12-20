const header=doucment.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});


window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }