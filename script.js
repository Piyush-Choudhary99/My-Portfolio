document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll when clicking on navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    }

    // Sample projects data (replace with your own data)
    const projectsData = [
        
        // Add more projects as needed
    ];

    // Function to dynamically add projects to the DOM
    function addProjectsToDOM() {
        const projectsContainer = document.getElementById("projects-container");

        projectsData.forEach((project) => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project");

            const imageElement = document.createElement("img");
            imageElement.src = project.image;
            imageElement.alt = project.title;

            const titleElement = document.createElement("h3");
            titleElement.textContent = project.title;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = project.description;

            projectElement.appendChild(imageElement);
            projectElement.appendChild(titleElement);
            projectElement.appendChild(descriptionElement);

            projectsContainer.appendChild(projectElement);
        });
    }

    // Call the function to add projects to the DOM
    addProjectsToDOM();

    // Form validation for the contact section
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simple validation - check if the email field is not empty
        const emailInput = document.getElementById("email");
        const errorMessage = document.getElementById("error-message");

        if (emailInput.value.trim() === "") {
            errorMessage.textContent = "Please enter a valid email address.";
        } else {
            errorMessage.textContent = "";
            // You can add further processing or submit the form to a server here
        }
    });
});
project
