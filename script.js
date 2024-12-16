// JavaScript for Add to Cart functionality

// Initialize an empty cart
const cart = [];

// Select cart elements
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");

// Function to update the cart display
function updateCartDisplay() {
    cartItemsContainer.innerHTML = ""; // Clear existing cart items
    let total = 0;

    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p><strong>${item.name}</strong></p>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        `;

        total += item.price * item.quantity;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalElement.textContent = total.toFixed(2);

    // Add event listeners for remove buttons
    document.querySelectorAll(".remove-from-cart").forEach((button) => {
        button.addEventListener("click", (e) => {
            const itemId = parseInt(e.target.getAttribute("data-id"));
            removeFromCart(itemId);
        });
    });
}

// Function to add an item to the cart
function addToCart(id, name, price) {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(id) {
    const itemIndex = cart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
    }

    updateCartDisplay();
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
        const id = parseInt(button.getAttribute("data-id"));
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));

        addToCart(id, name, price);
    });
});

// Checkout button event listener
document.getElementById("checkout-button").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for your purchase!");
    cart.length = 0; // Clear the cart
    updateCartDisplay();
});

// JavaScript for Testimonials Page

document.addEventListener("DOMContentLoaded", () => {
    const testimonialSection = document.querySelector(".testimonials");

    // Form to add new testimonials
    const testimonialForm = document.createElement("form");
    testimonialForm.classList.add("testimonial-form");
    testimonialForm.innerHTML = `
        <h3>Share Your Feedback</h3>
        <label for="customer-name">Name:</label>
        <input type="text" id="customer-name" name="customer-name" required>

        <label for="service-type">Service Type:</label>
        <input type="text" id="service-type" name="service-type" required>

        <label for="quote">Testimonial:</label>
        <textarea id="quote" name="quote" rows="4" required></textarea>

        <label for="customer-photo">Photo URL:</label>
        <input type="url" id="customer-photo" name="customer-photo" placeholder="Optional">

        <button type="submit">Submit Testimonial</button>
    `;

    testimonialSection.appendChild(testimonialForm);

    // Event listener for form submission
    testimonialForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Retrieve input values
        const customerName = document.getElementById("customer-name").value;
        const serviceType = document.getElementById("service-type").value;
        const quote = document.getElementById("quote").value;
        const customerPhoto = document.getElementById("customer-photo").value || "default-avatar.png";

        // Create a new testimonial element
        const newTestimonial = document.createElement("div");
        newTestimonial.classList.add("testimonial");
        newTestimonial.innerHTML = `
            <img src="${customerPhoto}" alt="${customerName}" class="customer-photo">
            <div class="testimonial-content">
                <p class="quote">"${quote}"</p>
                <p class="customer-name">${customerName}</p>
                <p class="service-type">${serviceType}</p>
            </div>
        `;

        // Append the new testimonial to the section
        testimonialSection.insertBefore(newTestimonial, testimonialForm);

        // Reset the form
        testimonialForm.reset();
        alert("Thank you for your feedback!");
    });
});

// JavaScript Code for Add to Cart Functionality

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Function to update the cart display
    function updateCart() {
        // Clear the current cart display
        cartItemsContainer.innerHTML = '';

        // Populate the cart items
        cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <p><strong>${item.name}</strong> - $${item.price.toFixed(2)} x ${item.quantity}</p>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });

        // Update the total price
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartTotal.textContent = total.toFixed(2);

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                removeFromCart(button.getAttribute('data-id'));
            });
        });
    }

    // Function to add an item to the cart
    function addToCart(id, name, price) {
        const existingItem = cartItems.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ id, name, price: parseFloat(price), quantity: 1 });
        }

        updateCart();
    }

    // Function to remove an item from the cart
    function removeFromCart(id) {
        const itemIndex = cartItems.findIndex(item => item.id === id);

        if (itemIndex !== -1) {
            cartItems.splice(itemIndex, 1);
        }

        updateCart();
    }

    // Event listener for Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');

            addToCart(id, name, price);
        });
    });

    // Checkout button functionality
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Thank you for your purchase!');
            cartItems.length = 0; // Clear the cart
            updateCart();
        }
    });
});

// Get references to the button and body
const modeToggleButton = document.getElementById("mode-toggle");
const body = document.body;

// Check for saved theme in localStorage
const savedMode = localStorage.getItem("theme");
if (savedMode === "dark") {
  body.classList.add("dark-mode");
  modeToggleButton.classList.add("dark-mode");
}

// Add an event listener to toggle dark mode
modeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  modeToggleButton.classList.toggle("dark-mode");

  // Save the current theme in localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});



const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configure MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'your_database',
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = results[0];

        // Compare the password hash
        bcrypt.compare(password, user.password_hash, (err, isMatch) => {
            if (err) return res.status(500).json({ error: 'Server error' });

            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            res.json({ message: 'Login successful', userId: user.id });
        });
    });
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
