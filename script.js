
const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");

// Mobile navigation
menu.addEventListener("click", () => {
    nav.classList.toggle("active");

    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-xmark");
});

// Close menu on navigation click
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-xmark");
    });
});

// Reveal animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".feature-card, .about-content, .cta-box")
    .forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

// Animated dashboard bars
const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
    bar.style.animation = `grow 1s ease ${index * 0.1}s backwards`;
});

// Smooth button interaction
document.querySelectorAll(".btn-main").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(.97)";
        setTimeout(() => {
            button.style.transform = "";
        }, 150);
    });
});
