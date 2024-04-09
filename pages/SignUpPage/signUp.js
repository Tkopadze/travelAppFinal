document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    window.location.href = "./../services/services.html";
  });

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".stickyHeaderNav");
  const h1 = document.querySelector(".stickyHeaderNav h1");
  const burgerMenuColor = document.querySelector(".burgerMenu");

  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
    nav.classList.remove("transparent");
    h1.style.color = "black";
    burgerMenuColor.style.url = "black";
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("transparent");
    h1.style.color = "white";
    burgerMenuColor.style.fill = "white";
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

  if (isSignInPage || isSignUpPage) {
    document.querySelector(".backgroundImg").style.backgroundImage = "none";
    document.querySelector(".backgroundImg").style.height = "48px";
    nav.classList.add("scrolled");
    nav.classList.remove("transparent");
    h1.style.color = "black";
    burgerMenuColor.style.url = "black";
  }
}

setCurrentPageStyle();

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

function openPrivacyPopup() {
  document.getElementById("terms-popup").style.display = "flex";
}
const backgroundTerm = document.getElementById("background");

// Event listener for opening Terms Popup
document
  .getElementById("privacy-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    backgroundTerm.style.display = "block";
    openPrivacyPopup();
  });

document
  .getElementById("terms-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    backgroundTerm.style.display = "block";
    openPrivacyPopup();
  });
const termsPopup = document.getElementById("terms-popup");
const termsBtn = document.getElementById("termsBtn");
termsBtn.addEventListener("click", () => {
  termsPopup.style.display = "none";
  backgroundTerm.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === termsPopup) {
    termsPopup.style.display = "none";
  }
});
