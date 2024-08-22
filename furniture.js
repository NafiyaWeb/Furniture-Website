document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

function filterProducts(category) {
    let products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.style.display = 'none'; // Hide all products
        if (category === 'all') {
            product.style.display = 'block'; // Show all products
        } else if (product.classList.contains(category)) {
            product.style.display = 'block'; // Show products of the selected category
        }
    });
}
// Get the modal, button, and close element
const modal = document.getElementById("contactModal");
const btn = document.getElementById("openContactForm");
const closeBtn = document.querySelector(".close");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the close button (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}