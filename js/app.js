// setting date

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


// nav toggle

const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

// add event listener and pass callback function

navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});

// adding smooth scroll effect

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        links.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 62; 

        windwow.scrollTo({
            left: 0,
            top:position,
            behavior: "smooth"
        });
    });
});