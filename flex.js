// Select all "Add to Cart" buttons
const buttons = document.querySelectorAll('.product button');

// Initialize an empty cart
const cart = [];

// Add a click event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('.product-details h2').textContent;
        const productPrice = button.parentElement.querySelector('.product-details p').textContent;

        // Add product to the cart
        cart.push({ name: productName, price: productPrice });

        // Display a notification
        const notification = document.createElement('div');
        notification.textContent = `${productName} added to the cart!`;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#28a745';
        notification.style.color = '#fff';
        notification.style.padding = '1rem';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        document.body.appendChild(notification);

        // Remove the notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    });
});