// JavaScript source code
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
