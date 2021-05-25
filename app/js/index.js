const img = document.querySelector(".hamburger img");
const hamburger = document.querySelector(".hamburger");
const hidden = document.querySelector(".fs__tags");
const a_tags = document.querySelectorAll(".lt_a a");

function toggleIcon() {
  img.classList.add("animate");

  if (img.src.includes("hamburger")) {
    hidden.style.display = "block";
    setTimeout(function () {
      img.setAttribute("src", "images/icon-close.svg");
      hamburger.style.padding = "0 .4rem";
      img.style.width = "2.6rem";
      img.style.height = "auto";
      img.classList.remove("animate");
    }, 200);

    hidden.style.animation = "small_s_reveal .5s ease-in-out forwards";
  } else {
    setTimeout(function () {
      img.setAttribute("src", "images/icon-hamburger.svg");

      img.classList.remove("animate");
      hidden.style.display = "none";
      a_tags.forEach((tag) => {
        tag.nextElementSibling.style.display = "none";
        tag.classList.remove("animate_arrows_small");
        tag.style.color = 'hsl(208, 49%, 24%)';
      });
    }, 200);

    hidden.style.animation = "small_s_hide .5s ease-in-out forwards";
  }
}

function show_small(e) {
  if (window.innerWidth <= 1023) {
    // e.preventDefault();

    const div = e.target.nextElementSibling;
    a_tags.forEach((tag) => {
      if (tag == this) {
        if (div.style.display === "block") {
          tag.nextElementSibling.style.display = "none";
          this.classList.toggle("animate_arrows_small");
          tag.style.color = "hsl(208, 49%, 24%)";
          return;
        } else {
          div.style.display = "block";
          tag.style.color = "hsl(206, 19%, 46%)";
          this.classList.add("animate_arrows_small");
          this.parentElement.style.paddingBottom = "2.4rem";
        }
      } else {
        tag.classList.remove("animate_arrows_small");
        tag.nextElementSibling.style.display = "none";
        tag.style.color = "hsl(208, 49%, 24%)";
        this.parentElement.style.paddingBottom = "3.8rem";
      }
    });
  } else {
    return;
  }
}

hamburger.addEventListener("click", toggleIcon);
a_tags.forEach((tag) => tag.addEventListener("click", show_small));
