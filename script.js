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
const b5 = document.querySelector(".b5");
const b6 = document.querySelector(".b6");
const b7 = document.querySelector(".b7");
const b8 = document.querySelector(".b8");
const b9 = document.querySelector(".b9");
const b10 = document.querySelector(".b10");
const b11 = document.querySelector(".b11");
const b12 = document.querySelector(".b12");
const b13 = document.querySelector(".b13");
const b14 = document.querySelector(".b14");
const b15 = document.querySelector(".b15");
const b16 = document.querySelector(".b16");
const b17 = document.querySelector(".b17");
const b18 = document.querySelector(".b18");
const b19 = document.querySelector(".b19");
const b20 = document.querySelector(".b20");
const b21 = document.querySelector(".b21");
const b22 = document.querySelector(".b22");
const b23 = document.querySelector(".b23");
const b24 = document.querySelector(".b24");

const u1 = document.querySelector(".u1");
const u2 = document.querySelector(".u2");
const u3 = document.querySelector(".u3");
const u4 = document.querySelector(".u4");
const u5 = document.querySelector(".u5");
const u6 = document.querySelector(".u6");
const u7 = document.querySelector(".u7");
const u8 = document.querySelector(".u8");
const u9 = document.querySelector(".u9");
const u10 = document.querySelector(".u10");
const u11 = document.querySelector(".u11");
const u12 = document.querySelector(".u12");
const u13 = document.querySelector(".u13");
const u14 = document.querySelector(".u14");
const u15 = document.querySelector(".u15");
const u16 = document.querySelector(".u16");
const u17 = document.querySelector(".u17");
const u18 = document.querySelector(".u18");
const u19 = document.querySelector(".u19");
const u20 = document.querySelector(".u20");
const u21 = document.querySelector(".u21");
const u22 = document.querySelector(".u22");
const u23 = document.querySelector(".u23");
const u24 = document.querySelector(".u24");

const mobileButtons = document.querySelectorAll(".mob-btn");

const transition = (
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
b5.classList.add("mob-white");
b9.classList.add("mob-white");
b13.classList.add("mob-white");
b17.classList.add("mob-white");
b21.classList.add("mob-white");

mobileButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btn = e.target.classList[1];
    btn === "b1" ? transition(b1, b2, b3, b4, u1, u2, u3, u4) : null;
    btn === "b2" ? transition(b2, b1, b3, b4, u2, u1, u3, u4) : null;
    btn === "b3" ? transition(b3, b1, b2, b4, u3, u1, u2, u4) : null;
    btn === "b4" ? transition(b4, b1, b2, b3, u4, u1, u2, u3) : null;

    btn === "b5" ? transition(b5, b6, b7, b8, u5, u6, u7, u8) : null;
    btn === "b6" ? transition(b6, b5, b7, b8, u6, u5, u7, u8) : null;
    btn === "b7" ? transition(b7, b5, b6, b8, u7, u5, u6, u8) : null;
    btn === "b8" ? transition(b8, b5, b6, b7, u8, u5, u6, u7) : null;

    btn === "b9" ? transition(b9, b10, b11, b12, u9, u10, u11, u12) : null;
    btn === "b10" ? transition(b10, b9, b11, b12, u10, u9, u11, u12) : null;
    btn === "b11" ? transition(b11, b9, b10, b12, u11, u9, u10, u12) : null;
    btn === "b12" ? transition(b12, b9, b10, b11, u12, u9, u10, u11) : null;

    btn === "b13" ? transition(b13, b14, b15, b16, u13, u14, u15, u16) : null;
    btn === "b14" ? transition(b14, b13, b15, b16, u14, u13, u15, u16) : null;
    btn === "b15" ? transition(b15, b13, b14, b16, u15, u13, u14, u16) : null;
    btn === "b16" ? transition(b16, b13, b14, b15, u16, u13, u14, u15) : null;

    btn === "b17" ? transition(b17, b18, b19, b20, u17, u18, u19, u20) : null;
    btn === "b18" ? transition(b18, b17, b19, b20, u18, u17, u19, u20) : null;
    btn === "b19" ? transition(b19, b17, b18, b20, u19, u17, u18, u20) : null;
    btn === "b20" ? transition(b20, b17, b18, b19, u20, u17, u18, u19) : null;

    btn === "b21" ? transition(b21, b22, b23, b24, u21, u22, u23, u24) : null;
    btn === "b22" ? transition(b22, b21, b23, b24, u22, u21, u23, u24) : null;
    btn === "b23" ? transition(b23, b21, b22, b24, u23, u21, u22, u24) : null;
    btn === "b24" ? transition(b24, b21, b22, b23, u24, u21, u22, u23) : null;
  });
});

// const text = document.querySelector(".projects-herotext");
// const innerBox = document.querySelector(".projects-innerbox");

// let padding = 0;
// text.addEventListener("click", () => {
//   padding += 300;
//   innerBox.style.paddingLeft = `${padding}px`;
// });
