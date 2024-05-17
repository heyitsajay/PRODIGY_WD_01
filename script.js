let menu = document.querySelector('#ham-btn');
let navbar = document.querySelector('.opt-list');

menu.onclick = () => {
    navbar.classList.toggle('show');
};


function subscribeNewsletter() {
    const email = document.getElementById('signup').value;
    if (validateEmail(email)) {
        alert('Thank you for subscribing to our newsletter!');
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60);
});