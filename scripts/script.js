// Get references to DOM elements
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Toggle the 'show-menu' class on navMenu when navToggle is clicked
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Remove the 'show-menu' class on navMenu when navClose is clicked
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Get all elements with the class 'nav-link'
const navLink = document.querySelectorAll(".nav-link");

// Function to handle click events on navLink elements
const linkAction = () => {
  // Remove the 'show-menu' class on navMenu when a navLink is clicked
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

// Add click event listeners to all navLink elements
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Function to handle scroll events and toggle the 'scroll-header' class on the header element
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

// Add scroll event listener to the window
window.addEventListener("scroll", scrollHeader);

// Get references to carousel elements
const carousel = document.querySelector(".skin-carousel");
const firstCardWidth = carousel.querySelector(".skin-card").offsetWidth;
const arrowBtns = document.querySelectorAll(".skin-container i");

// Function to handle click events on arrow buttons and scroll the carousel left or right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

// Get references to filter elements
const filterButtons = document.querySelectorAll(".guns-filters .guns-item");
const filterableCards = document.querySelectorAll(".guns-content .guns-card");

// Function to handle click events on filter buttons and show/hide corresponding cards
const filterCards = (e) => {
  // Remove the 'active-guns' class from the previously active button
  document.querySelector(".active-guns").classList.remove("active-guns");
  // Add the 'active-guns' class to the clicked button
  e.target.classList.add("active-guns");

  // Iterate over filterable cards and show/hide them based on the selected filter
  filterableCards.forEach((card) => {
    card.classList.add("hide");

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
      card.classList.add("show");
    }
  });
};

// Add click event listeners to all filter buttons
filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);
