"use strict";
const btnHamburger = document.getElementById("hamburger-button");
const primaryNavigation = document.getElementById("primary-navigation");
const sidebar = document.getElementById("sidebar");

document.querySelector('#hamburger-button').addEventListener('click', function () {
    document.querySelector('#sidebar').classList.toggle('open');
});

btnHamburger.addEventListener("click", () => {

    primaryNavigation.classList.toggle("open");
    sidebar.classList.toggle("open");

    const expanded = btnHamburger.getAttribute("aria-expanded") === "true";
    btnHamburger.setAttribute("aria-expanded", String(!expanded));
});
