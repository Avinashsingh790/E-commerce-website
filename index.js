document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart count from the displayed value
    let cartCount = parseInt(document.getElementById('cart-count').textContent, 10);

    // Function to update the cart count display
    function updateCartCount() {
        document.getElementById('cart-count').textContent = cartCount;
    }

    // Function to handle add to cart button clicks
    function handleAddToCart(event) {
        event.preventDefault(); // Prevent default action (e.g., navigation)
        cartCount++; // Increment cart count
        updateCartCount(); // Update the display
    }

    // Attach click event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add').forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });

    // Handle search input (placeholder functionality)
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase();
            // Implement search functionality here
            console.log('Search Query:', query); // For debugging
        });
    }

    // Handle navigation link highlighting
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Initialize the cart count on page load
    updateCartCount();
});
