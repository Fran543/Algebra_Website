
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    const burgerLines = document.querySelectorAll('.burger div');
    const originalBurgerLineColor = burgerLines[0].style.backgroundColor;

    burger.addEventListener('mouseover', () => {
        burgerLines.forEach(element => {
            element.style.backgroundColor = '#ebde34';
       });
    });

    burger.addEventListener('mouseout', () => {
        burgerLines.forEach(element => {
            element.style.backgroundColor = originalBurgerLineColor;
       });
    });
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.4}s`;

            }
        });
    });
    
}

const app = () => {
    navSlide();
}

app();