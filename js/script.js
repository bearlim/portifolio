let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let body = document.querySelector("body");
let darkModeOn = false;

document.addEventListener("DOMContentLoaded", function (e) {
  if (document.cookie.length == 0) document.cookie = "darkMode=false;";
  else {
    if (!document.cookie.includes("darkMode"))
      document.cookie = "darkMode=false;";
  }

  darkModeOn = document.cookie
    .split(";")
    .find((row) => row.includes("darkMode"))
    .includes("true");

  darkModeIsOn();
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offSet = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offSet && top < offSet + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });
};

function darkModeAction() {
  let img = document.getElementById("art-img");

  darkModeOn = document.cookie
    .split(";")
    .find((row) => row.includes("darkMode"))
    .includes("true");

  if (darkModeOn) {
    body.classList.remove("dark-mode");
    img.src = "imgs/laptopart.gif";
    document.cookie = "darkMode=false";
  } else {
    body.classList.add("dark-mode");
    img.src = "imgs/laptopart_darkmode.gif";
    document.cookie = "darkMode=true";
  }
}

function darkModeIsOn() {
  let img = document.getElementById("art-img");
  let buttom = document.getElementById("dark-mode-toggle");

  if (darkModeOn) {
    body.classList.add("dark-mode");
    img.src = "imgs/laptopart_darkmode.gif";
    buttom.checked = true;
  } else {
    body.classList.remove("dark-mode");
    img.src = "imgs/laptopart.gif";
    buttom.checked = false;
  }
}
