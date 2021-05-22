const img = document.querySelector(".hamburger img");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", toggleIcon);

function toggleIcon() {
  img.classList.add("animate");
  if (img.src.includes("hamburger")) {
    setTimeout(function () {
      img.setAttribute("src", "images/icon-close.svg");
      hamburger.style.padding = "0 .4rem";
      img.style.width = "2.6rem";
      img.style.height = "auto";
      img.classList.remove('animate');
    }, 530);
  } else {
    setTimeout(function(){
      img.setAttribute("src", "images/icon-hamburger.svg");
      img.classList.remove('animate');
    },550);
  }
}
