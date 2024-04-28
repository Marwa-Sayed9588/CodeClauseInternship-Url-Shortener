const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

function shortURL() {
    async function shortenURL() {
        const url = document.getElementById("url").value;
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        if (response.ok) {
            const data = await response.text();
            document.getElementById('result').innerHTML = `Shortened URL: <a href="${data}" target="_blank">${data}</a>`;
        } else {
            document.getElementById('result').innerHTML = "Error shortening URL";
        }
    }

    shortenURL();
}
