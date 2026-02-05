/**
 * Smooth Scroll to Sections
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Filter Library Results (Search Functionality)
 */
function filterLibrary() {
    const input = document.getElementById('librarySearch');
    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll('.annex-card');

    cards.forEach(card => {
        const title = card.querySelector('h4') ? card.querySelector('h4').innerText : "";
        const description = card.querySelector('p') ? card.querySelector('p').innerText : "";
        const text = (title + " " + description).toLowerCase();

        card.style.display = text.includes(filter) ? "" : "none";
    });
}

/**
 * Scroll Reveal Animation
 */
const revealSections = () => {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);