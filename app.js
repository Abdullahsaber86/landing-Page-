
// build the navbar list

let sections = document.querySelectorAll('section');
const ul = document.getElementById("navbar__list");

function createList() {
    for(let i=0; i<sections.length; i++) {
        ul.innerHTML += `<li><a class="menu__link" href="#section${i + 1}">section ${ul.children.length + 1}</a></li>`;
    }
};
createList();


//Find a value that works best, but 150 seems to be a good start.
//apply active state on current section and corresponding Nav link
// Add class 'active' to section when near top of viewport
//Remove active state from other section and corresponding Nav link

const makeActive = () => {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 40 && box.bottom >= 120) {
        section.classList.add('your-active-class');
        } else {
        section.classList.remove('your-active-class');
        }
    }
};

document.addEventListener("scroll", makeActive);





// Scroll to anchor ID using scrollintoview

const anchors = document.querySelectorAll('a[href^="#"]');

function scrolling() {
    for (const anchor of anchors) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ 
                behavior: "smooth"
            });
        });
    };
};

scrolling();    








