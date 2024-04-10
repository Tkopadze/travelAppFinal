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
  const li = document.querySelectorAll(".list");
  const user = document.querySelector(".user");
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
    burgerMenuColor.style.url = "black";
    li.forEach((x) => (x.style.color = "black"));
    user.style.fill = "black";
    // Change SVG fill color to black
    // header.classList.add("scrolled");
    // header.classList.remove("transparent");
  }
}

setCurrentPageStyle();

const burgerMenu = document.querySelector(".burgerMenu");
const popupContainer = document.getElementById("popup-container");
const closeBtn = document.getElementById("close-btn");
const navigation = document.querySelector(".navigation");
const burgerMenuUser = document.querySelector(".user");

// Add event listener to burger menu for opening the popup
burgerMenu.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor tag behavior
  popupContainer.style.display = "flex";
});
burgerMenuUser.addEventListener("click", () => {
  popupContainer.style.display = "flex";
  navigation.style.display = "none";
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
function signIn() {
  const submitUser = document.querySelector(".submit");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const localInfo = localStorage.getItem("user");
  var obj = json(localInfo);
  submitUser.addEventListener((x) => console.log(obj));
}
