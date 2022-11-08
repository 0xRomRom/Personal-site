"use strict";

//Hide navbar on scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-622px";
  }
  prevScrollpos = currentScrollPos;
};

const skillsList = document.querySelector(".list-container");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const javascript = document.querySelector(".javascript");
const react = document.querySelector(".react");
const cli = document.querySelector(".powershell");
const git = document.querySelector(".git");
const github = document.querySelector(".github");
const firebase = document.querySelector(".firebase");
const netlify = document.querySelector(".netlify");
const parcel = document.querySelector(".parcel");
const nodejs = document.querySelector(".nodejs");
const npm = document.querySelector(".npm");
const python = document.querySelector(".python");

const addStyle = (classInput, classInput2) => {
  classInput.style.backgroundColor = "cyan";
  classInput2.style.backgroundColor = "cyan";
};

const removeStyle = (classInput, classInput2) => {
  classInput.style.backgroundColor = "transparent";
  classInput2.style.backgroundColor = "transparent";
};

skillsList.addEventListener("mouseover", (e) => {
  const target = e.target.classList[0];
  target === "ico1" ? addStyle(html) : null;
  target === "ico2" ? addStyle(css) : null;
  target === "ico3" ? addStyle(javascript) : null;
  target === "ico4" ? addStyle(react) : null;
  target === "ico5" ? addStyle(cli) : null;
  target === "ico6" ? addStyle(git, github) : null;
  target === "ico7" ? addStyle(firebase) : null;
  target === "ico8" ? addStyle(netlify) : null;
  target === "ico9" ? addStyle(parcel) : null;
  target === "ico10" ? addStyle(nodejs) : null;
  target === "ico11" ? addStyle(npm) : null;
  target === "ico12" ? addStyle(python) : null;
});

skillsList.addEventListener("mouseout", (e) => {
  const target = e.target.classList[0];
  target === "ico1" ? removeStyle(html) : null;
  target === "ico2" ? removeStyle(css) : null;
  target === "ico3" ? removeStyle(javascript) : null;
  target === "ico4" ? removeStyle(react) : null;
  target === "ico5" ? removeStyle(cli) : null;
  target === "ico6" ? removeStyle(git, github) : null;
  target === "ico7" ? removeStyle(firebase) : null;
  target === "ico8" ? removeStyle(netlify) : null;
  target === "ico9" ? removeStyle(parcel) : null;
  target === "ico10" ? removeStyle(nodejs) : null;
  target === "ico11" ? removeStyle(npm) : null;
  target === "ico12" ? removeStyle(python) : null;
});

const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const u1 = document.querySelector(".u1");
const u2 = document.querySelector(".u2");
const u3 = document.querySelector(".u3");
const u4 = document.querySelector(".u4");

const mobileButtons = document.querySelectorAll(".mob-btn");

const transitionHandler = (
  white,
  btn1,
  btn2,
  btn3,
  upperVis,
  upper1,
  upper2,
  upper3
) => {
  white.classList.add("mob-white");
  btn1.classList.remove("mob-white");
  btn2.classList.remove("mob-white");
  btn3.classList.remove("mob-white");
  upperVis.classList.remove("hidden");
  upper1.classList.add("hidden");
  upper2.classList.add("hidden");
  upper3.classList.add("hidden");
};

b1.classList.add("mob-white");

mobileButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target.classList[1];
    target === "b1" ? transitionHandler(b1, b2, b3, b4, u1, u2, u3, u4) : null;
    target === "b2" ? transitionHandler(b2, b1, b3, b4, u2, u1, u3, u4) : null;
    target === "b3" ? transitionHandler(b3, b1, b2, b4, u3, u1, u2, u4) : null;
    target === "b4" ? transitionHandler(b4, b1, b2, b3, u4, u1, u2, u3) : null;
  });
});
