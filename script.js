// Hamburger menu
  let menuIcon = document.querySelector('#hamburger');
  let navlinks = document.querySelector('.navlinks');

  menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x'); // Toggle icon change
      navlinks.classList.toggle('active'); // Toggle menu visibility
  };

// Active links of scroll section 

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navlinks a");

window.onscroll = () => {
    let scrollPos = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Adjust according to header height
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (scrollPos >= offset && scrollPos < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active"); // Remove active class from all links
            });

            let activeLink = document.querySelector(`.navlinks a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active"); // Add active class to the corresponding link
            }
        }
    });

    // // Sticky Navbar
    // let header = document.querySelector('header');

    // header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x'); // Toggle icon change
    navlinks.classList.remove('active'); 
    
};

window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Scroll Reveal
ScrollReveal({
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.homeleftsec, .head', { origin: 'top' });
ScrollReveal().reveal('.homerightsec, .proj, .boxes', { origin: 'bottom' });
ScrollReveal().reveal('.aboutleftsec, .head2', { origin: 'left' });
ScrollReveal().reveal('.head3', { origin: 'right' });
 



// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent page refresh

//     // Show success message
//     document.getElementById("successMessage").classList.remove("hidden");

//     // Optional: Clear form after submission
//     // this.reset();
// });
