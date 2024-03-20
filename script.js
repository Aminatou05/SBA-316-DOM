// // Cache at least one element using selectElementById
const fullNameInput = document.getElementById('fullName');

console.log(fullNameInput)
// querySelectorAll method
const allElements = document.querySelectorAll('.my-class');
console.log(allElements);

// Use the parent-child-sibling relationship to navigate between elements at least
//  once (firstChild, lastChild, parentNode, nextElementSibling, etc.)
// Cache the input element using querySelector
const inputElement = document.querySelector("#username");

// Accessing  the parent node (div) of the input element
const parentDiv = inputElement.parentNode;

// Accessing the label element (sibling) of the input element
const labelElement = inputElement.previousElementSibling;

console.log("Input element:", inputElement);
console.log("Parent div:", parentDiv);
console.log("Label element:", labelElement);

// array of elements
const genderCategory = ["Male", "Female", "Other"];
// Using a for loop to iterate over the elements
for (let i = 0; i < genderCategory.length; i++) {
  console.log(genderCategory[i]);
}
const container = document.querySelector('.user-input-box'); 
const newDiv = document.createElement('div'); 
newDiv.textContent = 'Hello, world!'; 
container.appendChild(newDiv); 


// const template = document.getElementById('myFormTemplate');
// const clone = template.content.cloneNode(true);
// document.getElementById('myForm').appendChild(clone);

// Modify the HTML or text content of at least one element in response 
// to user interaction using innerHTML, innerText, or textContent.
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  passwordInput.addEventListener('input', () => {
      // Update some other element based on password input
      document.getElementById('message').innerText = 'Password entered';
  });


