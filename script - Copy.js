// 1. Smooth Scrolling for Section Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        // Smooth scroll to the section
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// 2. Sidebar Toggle for Mobile View (Optional)
const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebar = document.querySelector(".sidebar-container");

if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });
}

// 3. Sign Out Action
document.getElementById("sign-out-button")?.addEventListener("click", function() {
    // Clear session or any local storage
    sessionStorage.clear();
    localStorage.removeItem("userToken"); // Example if using token-based authentication
    
    // Optionally, you can display a confirmation message or alert
    alert("You have been signed out successfully.");
    
    // Redirect to login page or homepage
    window.location.href = "/login.html"; // Replace with the login page URL
});

// 4. FAQ Toggle (Expand/Collapse)
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector("h3");
    
    question.addEventListener("click", function() {
        const answer = item.querySelector("p");
        
        // Toggle visibility of the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// 5. Form Validation (Example for a hypothetical contact form)
// function validateForm() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     if (name === "" || email === "" || message === "") {
//         alert("Please fill in all the required fields.");
//         return false;
//     }
//     return true;
// }

// 6. Enhancing Hover Effects (Optional for images)
const innovationImages = document.querySelectorAll(".innovation-content img");

innovationImages.forEach(img => {
    img.addEventListener("mouseenter", function() {
        img.style.transform = "scale(1.05)";
        img.style.transition = "transform 0.3s ease";
    });

    img.addEventListener("mouseleave", function() {
        img.style.transform = "scale(1)";
    });
});

// 7. Back to Top Button (optional enhancement)
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "Back to Top";
backToTopButton.id = "back-to-top";
document.body.appendChild(backToTopButton);

// Show/hide the button depending on the scroll position
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to the top of the page when the button is clicked
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

