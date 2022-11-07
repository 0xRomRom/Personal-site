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
  console.log(e.target.classList[0]);
  e.target.classList[0] === "ico1" ? addStyle(html) : null;
  e.target.classList[0] === "ico2" ? addStyle(css) : null;
  e.target.classList[0] === "ico3" ? addStyle(javascript) : null;
  e.target.classList[0] === "ico4" ? addStyle(react) : null;
  e.target.classList[0] === "ico5" ? addStyle(cli) : null;
  e.target.classList[0] === "ico6" ? addStyle(git, github) : null;
  e.target.classList[0] === "ico7" ? addStyle(firebase) : null;
  e.target.classList[0] === "ico8" ? addStyle(netlify) : null;
  e.target.classList[0] === "ico9" ? addStyle(parcel) : null;
  e.target.classList[0] === "ico10" ? addStyle(nodejs) : null;
  e.target.classList[0] === "ico11" ? addStyle(npm) : null;
  e.target.classList[0] === "ico12" ? addStyle(python) : null;
});

skillsList.addEventListener("mouseout", (e) => {
  console.log(e.target.classList[0]);
  e.target.classList[0] === "ico1" ? removeStyle(html) : null;
  e.target.classList[0] === "ico2" ? removeStyle(css) : null;
  e.target.classList[0] === "ico3" ? removeStyle(javascript) : null;
  e.target.classList[0] === "ico4" ? removeStyle(react) : null;
  e.target.classList[0] === "ico5" ? removeStyle(cli) : null;
  e.target.classList[0] === "ico6" ? removeStyle(git, github) : null;
  e.target.classList[0] === "ico7" ? removeStyle(firebase) : null;
  e.target.classList[0] === "ico8" ? removeStyle(netlify) : null;
  e.target.classList[0] === "ico9" ? removeStyle(parcel) : null;
  e.target.classList[0] === "ico10" ? removeStyle(nodejs) : null;
  e.target.classList[0] === "ico11" ? removeStyle(npm) : null;
  e.target.classList[0] === "ico12" ? removeStyle(python) : null;
});
