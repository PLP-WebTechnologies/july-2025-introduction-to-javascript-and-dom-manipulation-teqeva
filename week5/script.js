// -----------------------------
// 🎯 PART 1: JavaScript Basics
// -----------------------------

// Variables and conditionals
let userName = "";
let isLoggedIn = false;

document.getElementById("greet-btn").addEventListener("click", function () {
    userName = document.getElementById("name-input").value;

    if (userName.trim() === "") {
        document.getElementById("greeting-output").innerText = "Please enter your name!";
    } else {
        isLoggedIn = true;
        document.getElementById("greeting-output").innerText = `Hello, ${userName}! Welcome 🚀`;
    }
});

// -----------------------------
// ❤️ PART 2: Functions
// -----------------------------

// Function to calculate total price
function calculateTotal(prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}

// Function to format currency
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

// Using functions
document.getElementById("calculate-btn").addEventListener("click", function () {
    const cart = [12.99, 23.5, 9.75, 5.0];
    let total = calculateTotal(cart);
    document.getElementById("total-output").innerText = `Your total is: ${formatCurrency(total)}`;
});

// -----------------------------
// 🔁 PART 3: Loops
// -----------------------------

// Countdown with for loop
document.getElementById("countdown-btn").addEventListener("click", function () {
    let output = "";
    for (let i = 5; i >= 0; i--) {
        output += i + " ";
    }
    document.getElementById("countdown-output").innerText = output;
});

// Array iteration using forEach
const tasks = ["Learn JS", "Build a Project", "Master DOM"];
console.log("My learning tasks:");
tasks.forEach(task => console.log(task));

// -----------------------------
// 🌐 PART 4: DOM Manipulation
// -----------------------------

// Change text dynamically
document.getElementById("welcome-text").style.color = "blue";

// Toggle a style class
document.getElementById("welcome-text").addEventListener("click", function () {
    this.style.color = this.style.color === "blue" ? "green" : "blue";
});

// Create a new element dynamically
let newNote = document.createElement("p");
newNote.innerText = "💡 Tip: Click the heading above to change its color!";
document.body.appendChild(newNote);
