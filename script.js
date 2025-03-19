// Toggle the navigation menu on mobile
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        // Toggle the display of the navigation menu
        navList.classList.toggle("show");
    });
}

// Smooth Scroll for navigation links (for when there are anchor links)
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Get the ID of the target
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Smooth scroll to the target section
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust scroll position to account for the header
                behavior: 'smooth'
            });
        }
    });
});
