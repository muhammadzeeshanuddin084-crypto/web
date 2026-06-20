// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Sticky Navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

});

// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

  reveals.forEach(item => {

    const windowHeight = window.innerHeight;

    const revealTop =
      item.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      item.classList.add("show");
    }

  });

}

window.addEventListener("scroll", revealSections);

// Counter Animation

const counters = document.querySelectorAll(".counter");

let started = false;

function runCounter() {

  counters.forEach(counter => {

    const target =
      Number(counter.dataset.target);

    let count = 0;

    const updateCounter = () => {

      count += target / 100;

      if (count < target) {

        counter.innerText =
          Math.floor(count);

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText = target;

      }

    };

    updateCounter();

  });

}

window.addEventListener("scroll", () => {

  const stats =
    document.querySelector(".stats");

  if (!stats) return;

  if (
    !started &&
    window.scrollY >
      stats.offsetTop - 400
  ) {
    runCounter();
    started = true;
  }

});

// Back To Top Button

const topBtn =
  document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

  if (!topBtn) return;

  if (window.scrollY > 400) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

});

if (topBtn) {

  topBtn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}

// Footer Current Year

const currentYear =
  document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent =
    new Date().getFullYear();
}