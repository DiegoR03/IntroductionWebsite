let backToTop_Button = document.getElementById("backToTop_Button");

const satellites = document.querySelectorAll(".flyingObject");
const dialog = document.getElementById("infoScreen");
const screenText = document.getElementById("screenText");
const closeBtn = document.getElementById("closeScreen");
const topPicture = document.getElementById('topImage');

satellites.forEach(satellite => {
  satellite.addEventListener("click", () => {
    const targetId = satellite.dataset.target;
    const li = document.getElementById(targetId);
    if (!li) return;

    screenText.textContent = li.textContent;
    dialog.showModal();
  });
});

closeBtn.addEventListener("click", () => {
  dialog.close();
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

document.querySelectorAll('.tableOfContent-Button').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

function drawLines() {
    const svg = document.getElementById("constellation-lines");
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
        backToTop_Button.style.display = "flex";
    } else {
        backToTop_Button.classList.remove('rocketFly');
        backToTop_Button.style.display = "none";
    }
}

backToTop_Button.addEventListener('click', () => {
    backToTop_Button.classList.add('rocketFly');
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


document.querySelectorAll('.leerdoel-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `
      translateY(-10px)
      rotateX(${(-y / 40)}deg)
      rotateY(${(x / 40)}deg)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

topPicture.style.cursor = 'pointer'; 
topPicture.addEventListener('click', () => {
    document.body.classList.toggle("light-mode");
    toggleLightMode();
});

function toggleLightMode() {
   let element = document.body;
   let topBody = document.getElementById("topImage");

   if (element.classList.contains("light-mode")) {    
    topBody.src = "img/Sun.png";
   } else {
    topBody.src = "img/Moon.png";
   }
}

window.addEventListener("load", drawLines);
window.addEventListener("resize", drawLines);
window.addEventListener("scroll", drawLines);

