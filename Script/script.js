
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Basic Validation
    if (fullName === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration successful! Redirecting to login...");
    // Redirect to login page
    window.location.href = "login.html"
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Login successful! Redirecting...");
        // Redirect to dashboard or home page (update URL as necessary)
        window.location.href = "dashboard.html";
    }
});})

// Select the contact form
const contactForm = document.querySelector('.contact-form');

// Add an event listener for the form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Redirect to a “Thank You” page
    window.location.href = 'thank-you.html'; // Replace with the desired URL or page
});


