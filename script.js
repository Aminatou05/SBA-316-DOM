const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();

    if (username.length < 3) {
        alert('Username must be at least 3 characters long.');
        usernameInput.focus();
    } else {
        // Valid input: 
        console.log('Valid username:', username);
    }

});
