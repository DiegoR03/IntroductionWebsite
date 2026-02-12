const apiURL = 'https://fdnd.directus.app/items/person/288';
const studentsURL = 'https://fdnd.directus.app/items/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&fields=id,name,fav_color';
const planetScroll = document.getElementById("planet-scroll");

const tableOfContent_Button = document.querySelector('.tableOfContent-Button[data-target="SolarSystem"]');
const solarOverlay = document.getElementById("solarOverlay");
const closeSolar = document.getElementById("closeSolar");


// Global variables to store Surface data
let surfaceData = {
    nationality: '',
    nickname: '',
    relationship: ''
};

let isDown = false;
let startX = 0;
let scrollLeft = 0;

planetScroll.addEventListener("mousedown", (e) => {
    isDown = true;
    planetScroll.classList.add("dragging");

    const rect = planetScroll.getBoundingClientRect();
    startX = e.clientX - rect.left;
    scrollLeft = planetScroll.scrollLeft;
});

window.addEventListener("mouseup", () => {
    isDown = false;
    planetScroll.classList.remove("dragging");
});

window.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    const rect = planetScroll.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const walk = (x - startX) * 1.2; 

    planetScroll.scrollLeft = scrollLeft - walk;
});

fetchJson(apiURL)
    .then(({ data }) => {
        const custom = parseCustomString(data.custom);

        writeHTML("ExosphereList", apiInfo(data, 'Exosphere'))
        writeHTML("ThermosphereList", apiInfo(data, 'Thermosphere'))
        writeHTML("StratosphereList", apiInfo(data, 'Stratosphere'))

        surfaceData.nationality = custom.nationality;
        surfaceData.nickname = data.nickname;
        surfaceData.relationship = custom.relationship_status;
    })

fetchJson(studentsURL)
    .then(({ data }) => {
        createPlanets(data);
    });

// Fail safe if API calls don't work
function writeHTML(targetId, html) {
    const target = document.getElementById(targetId);

    if (!target) {
        console.warn(`writeHTML: element #${targetId} not found`);
        return;
    }
    target.innerHTML = html;
}
function parseCustomString(string){
    return JSON.parse(string)
}

function apiInfo(data, view) {
    const custom = parseCustomString(data.custom);
    switch (view) {
        case 'Exosphere':
            return `
            <li id="info-name">Name: ${data.name}</li>
            <li id="info-birthday">Birthday: ${data.birthdate}</li>
            <li id="info-github">Github name: ${data.github_handle}</li>
            <li id="info-bio">Bio: ${data.bio}</li>
            `

        case 'Thermosphere':
            return`
                <div class="leerdoel-card">
                    <div class="leerdoel-tags">
                    <span>Front End + Back end</span>
                    <span>Prototypen en uitwerken</span>
                    </div>
                    <h2>${custom.goals[0]}</h2>
                    <p>Ik wil vloeiende en herbruikbare animaties maken met CSS en JavaScript en wil weten waar ik dit toepas.</p>
                    <ul>
                        <li>- Minder payload</li>
                        <li>- Snellere responses</li>
                    </ul>
                </div>

                <div class="leerdoel-card">
                    <div class="leerdoel-tags">
                    <span>Front End</span>
                    <span>Prototypen en uitwerken</span>
                    </div>
                    <h2>${custom.goals[1]}</h2>
                    <p>Ik wil verschillende vormen en visuele elementen kunnen maken met alleen CSS, zonder afbeeldingen.</p>
                    <ul>
                        <li>- Betere queries</li>
                        <li>- Minder duplicatie</li>
                    </ul>
                </div>

                <div class="leerdoel-card">
                    <div class="leerdoel-tags">
                    <span>Front End + Back end</span>
                    <span>Prototypen en uitwerken</span>
                    </div>
                    <h2>${custom.goals[2]}</h2>
                    <p>Ik wil API-data kunnen omzetten naar HTML door middel van DOM-manipulatie met JavaScript.</p>
                    <ul>
                        <li>- Naadloze animatie</li>
                        <li>- Goede timing</li>
                    </ul>
                </div>

                <div class="leerdoel-card">
                    <div class="leerdoel-tags">
                    <span>Back end</span>
                    <span>Prototypen en uitwerken</span>
                    </div>
                    <h2>${custom.goals[3]}</h2>
                    <p>Ik wil HTML-elementen kunnen genereren op basis van API-informatie.</p>
                    <ul>
                        <li>- Hover states</li>
                        <li>- Visuele feedback</li>
                    </ul>
                </div>
            `


        case 'Stratosphere':
            return `
                <li class="y">Favourite song: ${data.fav_song}</li>
                <li class="y">Hobbies: ${custom.hobbies}</li>
                <li class="y">Favourite food: ${custom.fav_food}</li>
            `

        default:
            return `<li>Geen informatie beschikbaar</li>`
    }
}

// Give all text elements en images a slow fade in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const elements = entry.target.querySelectorAll("h2, li, p");

    if (entry.isIntersecting) {
      elements.forEach((el, i) => {
        setTimeout(() => {
          if (entry.target.classList.contains("x")) {
            el.classList.add("fadeInX");
          } else {
            el.classList.add("fadeInY");
          }
        }, i * 150);
      });
    } else {
      elements.forEach(el => {
        el.classList.remove("fadeInX", "fadeInY");
      });
    }
  });
}, { threshold: 0.2 });


document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

async function fetchJson(url, payload = {}) {
    return await fetch(url, payload)
        .then((response) => response.json())
        .catch((error) => error)
}

// Other students
function createPlanets(students) {
    const container = document.getElementById("planet-container");

    students
        .filter(s => s.id !== 288)
        .forEach((student, i) => {
            container.appendChild(createPlanet(student, i));
        });

}

function createPlanet(student) {
    const planet = document.createElement("button");
    planet.classList.add("planet");

    const color = student.fav_color || "#ffffff";

    planet.innerHTML = `
        <div class="planet-surface"></div>
        <span class="planet-name">${student.name}</span>
    `;

    planet.style.setProperty("--planet-color", color);

    planet.addEventListener("click", () => {
        window.location.href = "https://fdnd.directus.app/items/person/" + student.id;
    });

    return planet;
}

const popupConfig = [
    {
        btnId: "capsuleBtn",
        popupId: "capsulePopup",
        infoId: "capsuleInfo",
        label: "Nationality",
        dataKey: "nationality"
    },
    {
        btnId: "buoy1Btn",
        popupId: "buoy1Popup",
        infoId: "buoy1Info",
        label: "Nickname",
        dataKey: "nickname"
    },
    {
        btnId: "buoy2Btn",
        popupId: "buoy2Popup",
        infoId: "buoy2Info",
        label: "Relationship",
        dataKey: "relationship"
    }
];

popupConfig.forEach(({ btnId, popupId, infoId, label, dataKey }) => {
    const btn = document.getElementById(btnId);
    const popup = document.getElementById(popupId);
    const info = document.getElementById(infoId);

    if (!btn || !popup || !info) return;

    btn.addEventListener("click", () => {
        closeAllPopups();
        info.textContent = `${label}: ${surfaceData[dataKey] || "Unknown"}`;
        popup.show();
    });
});

function closeAllPopups() {
    document.querySelectorAll("dialog[open]").forEach(dialog => {
        dialog.close();
    });
}

document.querySelectorAll(".popup-close").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.closest("dialog").close();
    });
});

tableOfContent_Button.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("no-scroll");
    solarOverlay.showModal();
});

closeSolar.addEventListener("click", () => {
    solarOverlay.close();
    document.body.classList.remove("no-scroll");
});

solarOverlay.addEventListener("close", () => {
    document.body.classList.remove("no-scroll");
});

