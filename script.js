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

const dot1 = document.querySelector(".sq1");
const dot2 = document.querySelector(".sq2");
const dot3 = document.querySelector(".sq3");
const dot4 = document.querySelector(".sq4");
const dot5 = document.querySelector(".sq5");
const dot6 = document.querySelector(".sq6");

const modal1 = document.querySelector(".m1");
const modal2 = document.querySelector(".m2");
const modal3 = document.querySelector(".m3");
const modal4 = document.querySelector(".m4");
const modal5 = document.querySelector(".m5");
const modal6 = document.querySelector(".m6");

const toggleStyle = (act, nac1, nac2, nac3, nac4, nac5) => {
  act.classList.add("circ-active");
  nac1.classList.remove("circ-active");
  nac2.classList.remove("circ-active");
  nac3.classList.remove("circ-active");
  nac4.classList.remove("circ-active");
  nac5.classList.remove("circ-active");
};

const toggleModal = (act, nac1, nac2, nac3, nac4, nac5) => {
  act.classList.remove("hidden");
  nac1.classList.add("hidden");
  nac2.classList.add("hidden");
  nac3.classList.add("hidden");
  nac4.classList.add("hidden");
  nac5.classList.add("hidden");
};

const workToggleButtons = document.querySelectorAll(".fa-sq");

workToggleButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btn = e.target.classList[0];
    if (btn === "sq1") {
      toggleStyle(dot1, dot2, dot3, dot4, dot5, dot6);
      toggleModal(modal1, modal2, modal3, modal4, modal5, modal6);
    }
    if (btn === "sq2") {
      toggleStyle(dot2, dot1, dot3, dot4, dot5, dot6);
      toggleModal(modal2, modal1, modal3, modal4, modal5, modal6);
    }
    if (btn === "sq3") {
      toggleStyle(dot3, dot1, dot2, dot4, dot5, dot6);
      toggleModal(modal3, modal1, modal2, modal4, modal5, modal6);
    }
    if (btn === "sq4") {
      toggleStyle(dot4, dot1, dot2, dot3, dot5, dot6);
      toggleModal(modal4, modal1, modal3, modal2, modal5, modal6);
    }
    if (btn === "sq5") {
      toggleStyle(dot5, dot1, dot2, dot3, dot4, dot6);
      toggleModal(modal5, modal1, modal3, modal4, modal2, modal6);
    }
    if (btn === "sq6") {
      toggleStyle(dot6, dot1, dot2, dot3, dot4, dot5);
      toggleModal(modal6, modal1, modal3, modal4, modal5, modal2);
    }
  });
});

const dropshadow = document.querySelector(".dropshadow");
const contactModal = document.querySelector(".contact-modal");
const centerModal = document.querySelector(".center-modal");
const closeContactModal = document.querySelector(".fa-circle-xmark");
const openContactModal = document.querySelector(".contact-cta");

dropshadow.addEventListener("click", () => {
  dropshadow.classList.add("hidden");
  contactModal.classList.add("hidden");
  centerModal.classList.add("hidden");
});

centerModal.addEventListener("click", (e) => {
  const targ = e.target.classList[0];
  if (
    targ === "contact-modal" ||
    targ === "contact-input" ||
    targ === "reach-out" ||
    targ === "email-input" ||
    targ === "email-label" ||
    targ === "submit-contact" ||
    targ === "fa-solid" ||
    targ === "please-message"
  ) {
    return;
  }
  dropshadow.classList.add("hidden");
  contactModal.classList.add("hidden");
  centerModal.classList.add("hidden");
});

closeContactModal.addEventListener("click", () => {
  dropshadow.classList.add("hidden");
  contactModal.classList.add("hidden");
  centerModal.classList.add("hidden");
});

openContactModal.addEventListener("click", () => {
  dropshadow.classList.remove("hidden");
  contactModal.classList.remove("hidden");
  centerModal.classList.remove("hidden");
});

const submitFormButton = document.querySelector(".submit-contact");
const messageText = document.querySelector(".contact-input");
const emailInput = document.querySelector(".email-input");
const pleaseMessage = document.querySelector(".please-message");
const thanksMessage = document.querySelector(".thanks-message");

submitFormButton.addEventListener("click", () => {
  if (messageText.value.length === 0) {
    pleaseMessage.classList.remove("hidden");
    setTimeout(() => {
      pleaseMessage.classList.add("hidden");
    }, 3000);
    return;
  }
  const userData = {
    email: emailInput.value,
    message: messageText.value,
  };
  submitFormHandler(userData);
  emailInput.value = "";
  messageText.value = "";
  thanksMessage.classList.remove("hidden");

  setTimeout(() => {
    thanksMessage.classList.add("hidden");
  }, 2500);

  setTimeout(() => {
    dropshadow.classList.add("fadeOut");
    contactModal.classList.add("fadeOut");
    centerModal.classList.add("fadeOut");
  }, 3000);
  setTimeout(() => {
    dropshadow.classList.add("hidden");
    contactModal.classList.add("hidden");
    centerModal.classList.add("hidden");
    dropshadow.classList.remove("fadeOut");
    contactModal.classList.remove("fadeOut");
    centerModal.classList.remove("fadeOut");
  }, 4000);
});

const submitFormHandler = (userData) => {
  fetch(
    `https://personal-site-d781d-default-rtdb.europe-west1.firebasedatabase.app/messages.json`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const burgerMenu = document.querySelector(".hamburger");
const navbar = document.querySelector(".navlist");
const navlinks = document.querySelectorAll(".nav-li");


let mobile = false;

setInterval(() => {
  let screenWidth = screen.width;
      if (screenWidth > 750) {
    navbar.setAttribute("style", "display: inline-flex !important");
    mobile = false;
  }

  if (!mobile) {
    
if (screenWidth < 750) {
    navbar.setAttribute("style", "display: none !important");
  }

  }
  
  

}, 1000)


navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    let screenWidth = screen.width;
    if(+screenWidth < 749) {
      navbar.style.display = "none";
      navbar.setAttribute("style", "display: none !important");
    }
  });
});


burgerMenu.addEventListener("click", () => {
  mobile = true;
  burgerMenu.classList.toggle("active");
  navbar.setAttribute("style", "display: flex !important");
});
