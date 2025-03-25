document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector(".text button");
    const navLinks = document.querySelectorAll("nav ul li a");
    const pageContent = document.querySelector("main");
    const heroImage = document.querySelector(".hero-image");
  
    let isClicked = false; 
    startButton.addEventListener("click", function () {
        isClicked = true; 
        startButton.style.backgroundColor = "#3d6655"; 
        setTimeout(() => {
            startButton.style.backgroundColor = "#69B99D"; 
        }, 300);
    });
  
    startButton.addEventListener("mouseenter", function () {
        if (isClicked) {
            startButton.style.backgroundColor = "#4a8a77";
        }
    });
    startButton.addEventListener("mouseleave", function () {
        if (isClicked) {
            startButton.style.backgroundColor = "#69B99D";
        }
    });
  
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.style.opacity = "0.5"); 
        this.style.opacity = "1";
      });
    });
  
    setTimeout(() => {
        pageContent.classList.add("visible");
        heroImage.classList.add("visible");
        document.body.classList.add("loaded");
    }, 200);
  });