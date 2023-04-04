gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  ease: "none",
  duration: 2,
});

window.onload = function () {
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
  }, 3000);
};

gsap.from(".greeting", {
  opacity: 0,
  y: 100,
  duration: 3,
  delay: 2,
});

gsap.from(".name", {
  opacity: 0,
  y: 100,
  duration: 3,
  delay: 4,
});

gsap.to(".typing", {
  text: "I'm a Front End Web Developer...",
  delay: 6.5,
  duration: 3,
  repeat: -1,
  repeatDelay: 0.7,
  ease: "power1.in",
  yoyo: true,
});

gsap.from(".myPhoto", {
  x: -200,
  delay: 8,
  ease: "elastic.out(1, 0.3)",
  duration: 3,
  opacity: 0,
});

gsap.from(".sideMenu", {
  x: 200,
  opacity: 0,
  delay: 9,
  ease: "elastic.out(.5, 0.2)",
  duration: 3,
  stagger: 0.5,
});

gsap.from(".controls", {
  opacity: 0,
  delay: 9,
});

const btn = document.querySelectorAll(".controls .control");
const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const allSection = document.querySelector(".main-content");
const canva = document.querySelector("canvas");

let particles = Particles.init({
  selector: ".particles-js",
  color: ["#FF41ED", "#8109B7", "#00ADB5"],
  connectParticles: true,
  speed: 0.3,
  maxParticles: 150,
  responsive: [
    {
      breakpoint: 1000,
      options: {
        speed: 0.6,
        maxParticles: 100,
        connectParticles: false,
      },
    },
  ],
});

function PageTransitions() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
      let activeBtn = document.querySelectorAll(".active-btn");
      activeBtn[0].className = activeBtn[0].className.replace("active-btn", "");
      this.className += "active-btn";
    };
  }

  //========SECTION ACTIVE CLASS=======

  allSection.onclick = function (e) {
    const id = e.target.dataset.id;
    if (id) {
      secBtns.forEach((button) => {
        button.classList.remove("active");
      });
      e.target.classList.add("active");
      //===Hide Other Sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  };
}
PageTransitions();
