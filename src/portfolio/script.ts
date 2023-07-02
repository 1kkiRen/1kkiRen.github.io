let hasScrolled = false;
const homeButton = document.getElementById('home') as HTMLDivElement;
const homeSection = document.getElementById('home-section') as HTMLDivElement;
const aboutButton = document.getElementById('about') as HTMLDivElement;
const aboutSection = document.getElementById('about-section') as HTMLDivElement;
const skillsButton = document.getElementById('skills') as HTMLDivElement;
const skillsSection = document.getElementById('skills-section') as HTMLDivElement;
const projectsButton = document.getElementById('projects') as HTMLDivElement;
const projectsSection = document.getElementById('projects-section') as HTMLDivElement;
const contactButton = document.getElementById('contact') as HTMLDivElement;
const contactSection = document.getElementById('contact-section') as HTMLDivElement;
const socialButton = document.getElementById('social') as HTMLDivElement;
const socialSection = document.getElementById('social-media-section') as HTMLDivElement;

const logo = document.getElementById('logo');

const mainTitle = document.getElementById('main-title') as HTMLHeadingElement;
const dropdownContent = document.getElementById('dropdown-content') as HTMLDivElement;


function toggleDropdown() {
    dropdownContent.classList.toggle('show');
}

mainTitle.addEventListener('mouseover', toggleDropdown, true);
mainTitle.addEventListener('mouseout', toggleDropdown, false);


window.onscroll = function() {
    const header = document.getElementById("header") as HTMLDivElement;
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



