// js/auth.js

// Demo credentials (replace with secure backend validation)
const adminUsername = "admin";
const adminPassword = "admin123";

// Call this in admin.html
function authenticateAdmin() {
    const username = prompt("Enter admin username:");
    const password = prompt("Enter admin password:");

    if (username !== adminUsername || password !== adminPassword) {
        alert("Access denied! You are not authorized to view this page.");
        window.location.href = "index.html";
    }
}
