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
console.log( 'You can move to the  nextElementSibling!');

// Iterate over a collection of elements to accomplish some task.
const allDivs = document.querySelectorAll('.container');
allDivs.forEach(cTag => {
    console.log(cTag);
    cTag.style.backgroundColor = 'blue';
})

//  Keeping this code for future reference array of elements of genderCategory!!
// const genderCategory = ["Male", "Female", "Other"];
// // Using a for loop to iterate over the elements
// for (let i = 0; i < genderCategory.length; i++) {
//   console.log(genderCategory[i]);
// }
// Create at least one element using createElement.
const container = document.querySelector(".user-input-box");
const newDiv = document.createElement("div");
container.appendChild(newDiv);

// Modify the HTML or text content of at least one element in response
// to user interaction using innerHTML, innerText, or textContent.
const confirmPasswordElem = document.getElementById("confirmPassword");
confirmPasswordElem.innerHTML = "Please re-enter your password for confirmation:";
console.log(confirmPasswordElem);
//  The text content will be updated to “New Phone Number: 123-456-7894.”
const phoneNumElem = document.getElementById("phoneNumber");

phoneNumElem.addEventListener("click", () => {
    phoneNumElem.textContent = "New Phone Number: 123-456-7894";
});
  // Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
  const template = document.getElementById("myTemplate");
  const clone = template.content.cloneNode(true);
  document.body.appendChild(clone);

  const myBtn = document.getElementById('myBtn') 
  myBtn.addEventListener("click",  function(event) {
    alert("Click me");
  })



