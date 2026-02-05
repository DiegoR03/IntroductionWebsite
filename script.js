const apiURL = 'https://fdnd.directus.app/items/person/288';
const parentElement = document.getElementById('Exosphere');

let mybutton = document.getElementById("topBtn");

parentElement.classList.add('loading')

mybutton.addEventListener('click', () => {
    mybutton.classList.add('rocketFly');
    setTimeout(() => {
        mybutton.classList.remove('rocketFly');
    }, duration * 500);

});

// Function used from own older project: https://github.com/DiegoR03/Portfolio-Website/blob/main/js/backgroundIcon.js
function createStar() {
    const containers = document.querySelectorAll('.stars');

    containers.forEach(container => {
        const star = document.createElement('span');
        star.classList.add('four-point-star');

        const size = Math.random() * 16 + 8;
        const duration = Math.random() * 4 + 4;

        star.style.fontSize = `${size}px`;
        star.style.left = `${Math.random() * container.clientWidth}px`;
        star.style.top = `${Math.random() * container.clientHeight}px`;
        star.style.animation = `twinkle ${duration}s ease-in-out infinite`;

        container.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    });
}

setInterval(createStar, 1000);

document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});



function drawLines() {
    const svg = document.getElementById("lines-svg");
    const container = svg.parentElement;
    const stars = document.querySelectorAll("header > button > span");

    if (!svg || stars.length < 2) return;

    const cRect = container.getBoundingClientRect();
    svg.innerHTML = "";

    svg.setAttribute(
        "viewBox",
        `0 0 ${cRect.width} ${cRect.height}`
    );

    for (let i = 0; i < stars.length - 1; i++) {
        // Skip de eerste ster zodat het lijkt op een sterrenbeeld
        const from = stars[i];
        const to = i === 0 ? stars[i + 2] : stars[i + 1];

        if (!to) continue;

        const a = from.getBoundingClientRect();
        const b = to.getBoundingClientRect();

        // Berekenen van svg locatie: <svg><line x1="7%" y1="30%" x2="167" y2="490"/></svg>
        const x1 = a.left - cRect.left + a.width / 2;
        const y1 = a.top - cRect.top + a.height / 2;
        const x2 = b.left - cRect.left + b.width / 2;
        const y2 = b.top - cRect.top + b.height / 2;

        // Information about svg from: https://stackoverflow.com/questions/1034712/creating-svg-graphics-using-javascript
        const line = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );

        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);

        svg.appendChild(line);
    }
}
// Scroll button from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

fetchJson(apiURL).then(function (response) {
    console.log(response.data)
    parentElement.innerHTML = `
    <h2>Exposhere - Introduction Info</h2>
        <ul>
            <li>Verjaardag: ${response.data.birthdate}</li>
            <li>Woonplaats: Heemskerk</li>
            <li>Hobbies: ${response.data.bio}</li>
        </ul>
        <!-- Oppervlakkige info -->
        <img id="flyingObject" src="img/Sattelite_Image.png">
        <img id="flyingObject" src="img/Sattelite_Image.png">
    `
    parentElement.classList.remove('loading')
})

async function fetchJson(url, payload = {}) {
    return await fetch(url, payload)
        .then((response) => response.json())
        .catch((error) => error)
}



window.addEventListener("load", drawLines);
window.addEventListener("resize", drawLines);
window.addEventListener("scroll", drawLines);

