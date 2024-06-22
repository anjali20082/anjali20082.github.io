// Function to handle form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting me, ' + name + '!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
}

// Add event listener to the form submit button
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('button[type="button"]');
    submitButton.addEventListener('click', submitForm);
});
