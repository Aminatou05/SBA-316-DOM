// Cache at least one element using selectElementById
const fullNameInput = document.getElementById("fullName");

console.log(fullNameInput);
// querySelectorAll method
const allElements = document.querySelectorAll(".class");
console.log(allElements);

// Use the parent-child-sibling relationship to navigate between elements at least
//  once (firstChild, lastChild, parentNode, , etc.)
// Cache the input element using querySelector
const usernameInput= document.querySelector(".user-input-box").nextElementSibling;
console.log(usernameInput, 'You can move to the next nextElementSibling!');

// const parentElement = usernameInput.parentElement;
// array of elements of genderCategory
const genderCategory = ["Male", "Female", "Other"];
// Using a for loop to iterate over the elements
for (let i = 0; i < genderCategory.length; i++) {
  console.log(genderCategory[i]);
}
// Create at least one element using createElement.
const container = document.querySelector(".user-input-box");
const newDiv = document.createElement("div");
container.appendChild(newDiv);

// Modify the HTML or text content of at least one element in response
// to user interaction using innerHTML, innerText, or textContent.
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

passwordInput.addEventListener("input", () => {
  // Update some other element based on password input
  document.getElementById("message").innerText = "Password entered";
  console.log(passwordInput);
});

const phoneNumInput = document.getElementById("phoneNumber");

// Adding  an event listener for the 'input' event
phoneNumInput.addEventListener("input", function () {
  // Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
  if (phoneNumInput.value.length > 10) {
    phoneNumInput.style.backgroundColor = "red";
  } else {
    phoneNumInput.style.backgroundColor = "blue";
  }
  // Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
  const template = document.getElementById("myTemplate");
  const clone = template.content.cloneNode(true);
  document.body.appendChild(clone);

  const myBtn = document.getElementById('myBtn') 
  myBtn.addEventListener("click",  function(event) {
    alert("Click me");
  })

  
});
