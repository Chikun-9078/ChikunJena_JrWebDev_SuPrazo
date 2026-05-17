// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Dark Mode Toggle

const darkModeToggle = document.getElementById("darkModeToggle");


// Check Saved Theme

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");
}


// Toggle Theme

darkModeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // Save Theme

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme", "dark");
    }
    else{

        localStorage.setItem("theme", "light");
    }
});

// Close Mobile Menu After Clicking Link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Scroll Animation

const sections = document.querySelectorAll(".animate");

window.addEventListener("scroll", revealSections);

function revealSections() {

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){
            section.classList.add("show");
        }
    });
}

revealSections();

// Typing Animation

const words = [
    "Trusted Services",
    "Professional Workers",
    "Local Experts"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        typingElement.textContent += words[wordIndex][charIndex];
        charIndex++;

        setTimeout(typeEffect, 100);
    }
    else{
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent = words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect, 50);
    }
    else{

        wordIndex = (wordIndex + 1) % words.length;

        setTimeout(typeEffect, 300);
    }
}

typeEffect();
// Counter Animation

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);
        }
        else{

            counter.innerText = target;
        }
        }

    updateCounter();
});


// Back To Top Button

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {

    if(window.scrollY > 300){
        topBtn.style.display = 'block';
    }
    else{
        topBtn.style.display = 'none';
    }
});


topBtn.addEventListener('click', () => {
window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Loader

window.addEventListener('load', () => {

    const loader = document.querySelector('.loader-wrapper');

    loader.style.display = 'none';
});