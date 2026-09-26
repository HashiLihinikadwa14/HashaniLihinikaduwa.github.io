/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* Close mobile menu
   when a link is clicked */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "☾";

}


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");


        if (isLight) {

            themeToggle.textContent = "☾";

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        } else {

            themeToggle.textContent = "☀";

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        }

    });

}


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CURRENT YEAR
========================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================
   PAGE LOADED
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "Hashi's portfolio loaded successfully."
    );

});
