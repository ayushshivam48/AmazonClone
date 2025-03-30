// Wait for the DOM content to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Search functionality
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-icon");

    // Trigger search on button click or Enter key press
    searchButton.addEventListener("click", handleSearch);
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    });

    function handleSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // You can replace the alert with actual search functionality
        } else {
            alert("Please enter a search term.");
        }
    }

    // Back to top functionality
    const backToTopButton = document.querySelector(".foot-panel1");
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Delivery functionality simulation
    const deliveryButton = document.querySelector(".add-icon");
    deliveryButton.addEventListener("click", () => {
        alert("Set Location page...");
        // You can replace this with the actual delivery link
    });

    // Sign-in functionality simulation
    const signInButton = document.querySelector(".nav-signin");
    signInButton.addEventListener("click", () => {
        alert("Redirecting to sign-in page...");
        // You can replace this with the actual sign-in link
    });

    // Return&Order functionality simulation
    const returnAndorderButton = document.querySelector(".nav-return");
    returnAndorderButton.addEventListener("click", () => {
        alert("Opening Return&Order page...");
        // You can replace this with the actual Return&Order link
    });

    // Cart functionality simulation
    const cartButton = document.querySelector(".nav-cart");
    cartButton.addEventListener("click", () => {
        alert("Opening your cart...");
        // You can replace this with actual cart functionality
    });

    // Handle panel item clicks
    document.querySelectorAll(".panel-opt p").forEach((item) => {
        item.addEventListener("click", () => {
            alert(`Navigating to: ${item.textContent}`);
            // Add actual navigation functionality if needed
        });
    });
});
