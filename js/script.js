let hasScrolled = false;
const homeButton = document.getElementById('home');
const homeSection = document.getElementById('home-section');
const aboutButton = document.getElementById('about');
const aboutSection = document.getElementById('about-section');
const skillsButton = document.getElementById('skills');
const skillsSection = document.getElementById('skills-section');
const projectsButton = document.getElementById('projects');
const projectsSection = document.getElementById('projects-section');
const contactButton = document.getElementById('contact');
const contactSection = document.getElementById('contact-section');
const socialButton = document.getElementById('social');
const socialSection = document.getElementById('social-media-section');



window.onscroll = function() {
const header = document.getElementById("header");
    if (window.scrollY > 0) {
        header.classList.add("shrink");
        if (hasScrolled) {
            return;
        } else {
            hasScrolled = true;
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        header.classList.remove("shrink");
        hasScrolled = false;
    }
}

aboutButton.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

homeButton.addEventListener('click', () => {
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

skillsButton.addEventListener('click', () => {
    skillsSection.scrollIntoView({ behavior: 'smooth' });
});

projectsButton.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

contactButton.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

socialButton.addEventListener('click', () => {
    socialSection.scrollIntoView({ behavior: 'smooth' });
});



