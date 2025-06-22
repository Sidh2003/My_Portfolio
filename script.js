// Select the side menu element
const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
// Function to open the mobile menu
function openMenu() {
  sideMenu.style.transform = "translateX(0)"; // Slide menu into view
}

// Function to close the mobile menu
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)"; // Slide menu out of view
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLinks.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
  }

  //
});

// Check if the user has already submitted the form before
let formSubmitted = localStorage.getItem("formSubmitted") === "true";

// If form was submitted before, enable the download link
if (formSubmitted) {
  document
    .getElementById("downloadBtn")
    .setAttribute("href", "./images/My_Resume.pdf");
  document
    .getElementById("downloadBtn")
    .setAttribute("download", "My resume.pdf");
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    let formData = new FormData(this);

    // Send form data to Web3Forms
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          alert(
            "Form submitted successfully! You can now download the resume."
          );

          // Store user data in localStorage
          localStorage.setItem(
            "userName",
            document.getElementById("name").value
          );
          localStorage.setItem(
            "userEmail",
            document.getElementById("email").value
          );
          localStorage.setItem(
            "userMessage",
            document.getElementById("message").value
          );
          localStorage.setItem("formSubmitted", "true"); // Mark form as submitted

          // Allow download
          formSubmitted = true;
          document
            .getElementById("downloadBtn")
            .setAttribute("href", "./images/My_Resume.pdf");
          document
            .getElementById("downloadBtn")
            .setAttribute("download", "My resume.pdf");
        } else {
          alert("Form submission failed. Please try again.");
        }
      })
      .catch((error) => console.error("Error:", error));
  });

// Prevent download before form submission
document
  .getElementById("downloadBtn")
  .addEventListener("click", function (event) {
    if (!formSubmitted) {
      event.preventDefault(); // Stop the default download action
      alert("Please fill out the contact form before downloading the resume.");
    }
  });

// paragraph code

const text =
  "I am eager to apply my expertise to real-world challenges and contribute to the success of innovative projects!";
const container = document.getElementById("typewriter-text");
let index = 0;

function type() {
  if (index < text.length) {
    container.textContent += text.charAt(index);
    index++;
    setTimeout(type, 40); // typing speed
  }
}

type();
