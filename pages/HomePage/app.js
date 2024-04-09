window.addEventListener("scroll", () => {
  const nav = document.querySelector(".stickyHeaderNav");
  const h1 = document.querySelector(".stickyHeaderNav h1");
  const burgerMenuColor = document.querySelector(".burgerMenu");

  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
    nav.classList.remove("transparent");
    h1.style.color = "black"; // Change text color to black
    burgerMenuColor.style.url = "black"; // Change SVG fill color to black
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("transparent");
    h1.style.color = "white"; // Change text color back to white
    burgerMenuColor.style.fill = "white"; // Change SVG fill color back to white
  }
  setCurrentPageStyle();
});

function setCurrentPageStyle() {
  const currentUrl = window.location.href;
  const isSignInPage = currentUrl.includes("signIn.html");
  const isSignUpPage = currentUrl.includes("signUp.html");
  const nav = document.querySelector(".stickyHeaderNav");
  const h1 = document.querySelector(".stickyHeaderNav h1");
  const burgerMenuColor = document.querySelector(".burgerMenu");

  // Apply specific styles for sign-in and sign-up pages
  if (isSignInPage || isSignUpPage) {
    // Hide background image
    document.querySelector(".backgroundImg").style.backgroundImage = "none";
    document.querySelector(".backgroundImg").style.height = "48px";
    nav.classList.add("scrolled");
    nav.classList.remove("transparent");
    h1.style.color = "black"; // Change text color to black
    burgerMenuColor.style.url = "black"; // Change SVG fill color to black
    // header.classList.add("scrolled");
    // header.classList.remove("transparent");
  }
}

setCurrentPageStyle();

const renderCards = (cards) => {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; // Clear previous content

  const cardElements = cards.map((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
                <img src="${card.photo}" alt="${card.title}">
                <h2>${card.title}</h2>
                <p>${card.description}</p>
            `;
    return cardElement;
  });

  // Append all card elements to the container at once
  cardContainer.append(...cardElements);
};

// Function to render slider cards using data from data.json
const renderSliderCards = (sliderCards) => {
  const sliderCardContainer = document.getElementById("sliderCardContainer");
  sliderCardContainer.innerHTML = ""; // Clear previous content

  const sliderCardElements = sliderCards.map((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("slider-card");
    cardElement.innerHTML = `
                <img src="${card.photo}" alt="${card.title}">
                <h2>${card.title}</h2>
                <p>Country: ${card.country}, City: ${card.city}</p>
                <p>Adults: ${card.adults}, Children: ${card.children}</p>
                <p>Price: $${card.price}</p>
            `;
    return cardElement;
  });

  // Append all slider card elements to the container at once
  sliderCardContainer.append(...sliderCardElements);
};

// Function to render blog cards using data from data.json
const renderBlogCards = (blogCards) => {
  const blogCardContainer = document.getElementById("blogCardContainer");
  blogCardContainer.innerHTML = ""; // Clear previous content

  const blogCardElements = blogCards.map((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("blog-card");
    cardElement.innerHTML = `
                  <img src="${card.photo}" alt="${card.title}">
                  <p>${card.description}</p>
              `;
    return cardElement;
  });

  // Append all blog card elements to the container at once
  blogCardContainer.append(...blogCardElements);
};

// Fetch data from data.json and render cards
fetch("../.././data.json")
  .then((response) => response.json())
  .then((data) => {
    renderCards(data.cardsData);
    renderSliderCards(data.sliderCardsData);
    renderBlogCards(data.blogCardsData);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const burgerMenu = document.querySelector(".burgerMenu");
const popupContainer = document.getElementById("popup-container");
const closeBtn = document.getElementById("close-btn");

// Add event listener to burger menu for opening the popup
burgerMenu.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor tag behavior
  popupContainer.style.display = "flex";
});

// Add event listener to close button for closing the popup
closeBtn.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

let slideIndex = 0;
const slider = document.querySelector("#sliderCardContainer");

function nextSlide() {
  slideIndex++;
  translateSlider();
}

function prevSlide() {
  slideIndex--;
  translateSlider();
}

function translateSlider() {
  const slideWidth = slider.querySelector(".slider-card").offsetWidth;
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Optional: Add event listeners to arrow keys or buttons
document.querySelector("#prevBtn").addEventListener("click", prevSlide);
document.querySelector("#nextBtn").addEventListener("click", nextSlide);
