// script.js
const form = document.getElementById("order-form");
const totalElement = document.getElementById("total");

// Set up the form submission event handler
form.addEventListener("submit", event => {
    event.preventDefault();

    // Get the selected food and quantity
    const food = form.elements.food.value;
    const quantity = form.elements.quantity.value;

    // Calculate the total price
    let totalPrice = 0;
    switch (
