// Show Scroll Top Button
const scrollTop = () => {
  const scrollTop = document.querySelector('.scroll-top');
  // Show scroll top button when greater than 300. Ass show-scroll class to the element
  if (scrollY >= 300) {
    // Add the show-scroll class to show the button
    scrollTop.classList.add('show-scroll');
  } else {
    // Remove the show-scroll class to hide the button
    scrollTop.classList.remove('show-scroll');
  }
};
window.addEventListener('scroll', scrollTop);

// Scroll Section Active
// Get all the sections
const sections = document.querySelectorAll('section');

const scrollActive = () => {
  // get current YOffset
  const scrollY = window.pageYOffset;

  // Loop through the Nodelist to compare the current YOffset with the current visible section and add or remove the active class to reveal/hide the active dot
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Add the active class
      document
        .querySelector(`.nav-menu a[href*=${sectionId}]`)
        .classList.add('active');
    } else {
      // Remove the active class
      document
        .querySelector(`.nav-menu a[href*=${sectionId}]`)
        .classList.remove('active');
    }
  });
};
window.addEventListener('scroll', scrollActive);

// Small Screen Menu Toggle
const menuToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Eventlistener on Hamburger
menuToggle.addEventListener('click', () => {
  // Remove rotated lines, remove menu
  if (navMenu.classList.contains('show-menu')) {
    menuToggle.childNodes[1].classList.remove('rotate1');
    menuToggle.childNodes[3].classList.remove('rotate2');

    navMenu.classList.remove('show-menu');
  } else {
    menuToggle.childNodes[1].classList.add('rotate1');
    menuToggle.childNodes[3].classList.add('rotate2');

    navMenu.classList.add('show-menu');
  }
});

// Eventlistener on links inside Hamburger
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    // Remove Nav Menu
    navMenu.classList.remove('show-menu');

    // Rotate Hamburger Lines back
    menuToggle.childNodes[1].classList.toggle('rotate1');
    menuToggle.childNodes[3].classList.toggle('rotate2');
  });
});
