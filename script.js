const apiURL = './API/personInfo_API.json';


let topBtn = document.getElementById("topBtn");

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
        topBtn.style.display = "flex";
    } else {
        topBtn.classList.remove('rocketFly');
        topBtn.style.display = "none";
    }
}

topBtn.addEventListener('click', () => {
    topBtn.classList.add('rocketFly');
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

fetchJson(apiURL)
    .then(({ data }) => {
        writeHTML("ExosphereList", apiInfo(data, 'Exosphere'))
        writeHTML("ThermosphereList", apiInfo(data, 'Thermosphere'))
        writeHTML("StratosphereList", apiInfo(data, 'Stratosphere'))
        writeHTML("SurfaceList", apiInfo(data, 'Surface'))
    })

function writeHTML(target, html) {
    target = document.getElementById(target)
    target.innerHTML = html
}

function apiInfo(data, view) {
    switch (view) {
        case 'Exosphere':
            return `
                <li>Name: ${data.name}</li>
                <li>Role: ${data.role}</li>
                <li>Github name: ${data.github_handle}</li>
                <li>Bio: ${data.bio}</li>
            `

        case 'Thermosphere':
            return `
                <li>Birthday: ${data.birthdate}</li>
                <li>Hobbies: ${data.hobbies}</li>
                <li>Favourite food: ${data.fav_food}</li>
            `

        case 'Stratosphere':
            return `
                <li>${data.goals[0]}</li>
                <li>${data.goals[1]}</li>
                <li>${data.goals[2]}</li>
                <li>${data.goals[3]}</li>
            `
            

        case 'Surface':
            return `
                <li>Nationality: ${data.nationality}</li>
                <li>Nickname: ${data.nickname}</li>
                <li>Relationship: ${data.relationship_status}</li>
            `

        default:
            return `<li>Geen informatie beschikbaar</li>`
    }
}

async function fetchJson(url, payload = {}) {
    return await fetch(url, payload)
        .then((response) => response.json())
        .catch((error) => error)
}



window.addEventListener("load", drawLines);
window.addEventListener("resize", drawLines);
window.addEventListener("scroll", drawLines);

