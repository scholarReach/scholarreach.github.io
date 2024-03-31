function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// animation
const textWrappers = document.querySelectorAll('.ml3');
textWrappers.forEach((textWrapper) => {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
    .add({
      targets: '.letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 1500,
      delay: (el, i) => 10 * i
    }).add({
      targets: '.letter',
      duration: 10,
      easing: "easeOutExpo",
      delay: 10
    });
});