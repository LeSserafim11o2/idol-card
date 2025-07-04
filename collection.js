import idols from "./idols.js";

const fullGrid = document.getElementById("full-card-grid");
const pagination = document.getElementById("pagination");
const seasonTagContainer = document.getElementById("season-tags");
const CARDS_PER_PAGE = 30;

const showOpenedCheckbox = document.getElementById("show-opened");
const showUnopenedCheckbox = document.getElementById("show-unopened");
const cardCounter = document.getElementById("card-counter");

let currentPage = 1;
let currentSeasonFilter = "all";

const seasonBoosts = {
    "ICONS":      { vocal: 3, rap: 3, dance: 3, visual: 3, fan: 5, viral: 5 },
    "TOP STARS":  { vocal: 1, rap: 1, dance: 1, visual: 1, fan: 2, viral: 2 },
    "IZ*ONE SPECIAL": { vocal: 15, rap: 15, dance: 15, visual: 15, fan: 15, viral: 15 },
    "NEW GEN":    { vocal: -2, rap: -2, dance: -2, visual: -2, fan: -2, viral: -2 },
    "UNSUNG IDOLS": { vocal: -3, rap: -3, dance: -3, visual: -3, fan: -3, viral: -3 },
    "NATIONALLY": { vocal: -3, rap: -3, dance: -3, visual: -3, fan: -3, viral: -3 },
    "SURVIVAL": { vocal: 2, rap: 2, dance: 2, visual: 2, fan: 2, viral: 2 },
    "GROUP'S FACE": { vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    "LONE RANGER": { vocal: -5, rap: -5, dance: -5, visual: -5, fan: -5, viral: -5 },
    "BEST VOICE": { vocal: -5, rap: -5, dance: -5, visual: -5, fan: -5, viral: -5 },
    "DANCE MACHINE": { vocal: -5, rap: -5, dance: -5, visual: -5, fan: -5, viral: -5 },
    "TOP VISUAL": { vocal: -5, rap: -5, dance: -5, visual: -5, fan: -5, viral: -5 },
    "RAP COOL": { vocal: -5, rap: -5, dance: -5, visual: -5, fan: -5, viral: -5 },
    'FOREIGN SOLDIER': { vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    'PRE DEBUT': { vocal: 2, rap: 2, dance: 2, visual: 2, fan: 2, viral: 2 },
    'SPORT LIGHT':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    'VERSATILE':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    'RISE UP':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    'LAST DANCE':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }, 
    'CUP TROPHY':{ vocal: -2, rap: -2, dance: -2, visual: -2, fan: -2, viral: -2 },
    'HARD WORKER':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }, 
    'LOYAL BOND':{ vocal: -2, rap: -2, dance: -2, visual: -2, fan: -2, viral: -2 }, 
    'ULTIMATE SKILLS':{ vocal: -3, rap: -3, dance: -3, visual: -3, fan: -3, viral: -3 }, 
    'NATIONAL SONG':{ vocal: -2, rap: -2, dance: -2, visual: -2, fan: -3, viral: -3 }, 
    'TOP CRUSH':{ vocal: -2, rap: -2, dance: -2, visual: -2, fan: -4, viral: -4 }, 
    'DINOSAUR ROOKIE':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }, 
    'RETURNS':{ vocal: -1, rap: -1, dance: -1, visual: -1, fan: -4, viral: -4 }, 
    'ANTI HERO':{ vocal: -2, rap: -2, dance: -2, visual: -2, fan: -3, viral: -3 }, 
    'ONE HIT':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }, 
    'MULTIVERSE':{ vocal: -2, rap: -2, dance: -2, visual: -2, fan: -3, viral: -3 }
};

function calculateOverall(stats, role) {
    const roleWeights = {
        "Dance Centric":     { vocal: 1, dance: 3, rap: 1, visual: 1, fan: 2, viral: 2, divisor: 10 },
        "Rap Centric":       { vocal: 1, dance: 1, rap: 3, visual: 1, fan: 2, viral: 2, divisor: 10 },
        "Visual Centric":    { vocal: 1, dance: 1, rap: 1, visual: 3, fan: 2, viral: 2, divisor: 10 },
        "Vocal Centric":     { vocal: 3, dance: 1, rap: 1, visual: 1, fan: 2, viral: 2, divisor: 10 },
        "Energy Centric":    { vocal: 1, dance: 1, rap: 1, visual: 1, fan: 3, viral: 3, divisor: 10 },
        "All Rounder":       { vocal: 1.5, dance: 1.5, rap: 1.5, visual: 1.5, fan: 2, viral: 2, divisor: 10 },
        "Dance-Visual Ace":     { vocal: 0.5, dance: 2.5, rap: 0.5, visual: 2.5, fan: 2, viral: 2, divisor: 10 },
        "Vocal-Rap Ace":        { vocal: 2.5, dance: 0.5, rap: 2.5, visual: 0.5, fan: 2, viral: 2, divisor: 10 },
        "Rap-Visual Ace":       { vocal: 0.5, dance: 0.5, rap: 2.5, visual: 2.5, fan: 2, viral: 2, divisor: 10 },
        "Rap-Dance Ace":        { vocal: 0.5, dance: 2.5, rap: 2.5, visual: 0.5, fan: 2, viral: 2, divisor: 10 },
        "Vocal-Dance Ace":      { vocal: 2.5, dance: 2.5, rap: 0.5, visual: 0.5, fan: 2, viral: 2, divisor: 10 },
        "Vocal-Visual Ace":     { vocal: 2.5, dance: 0.5, rap: 0.5, visual: 2.5, fan: 2, viral: 2, divisor: 10 },
        "Vocal-Rap-Dance Ace":      { vocal: 2, rap: 2, dance: 2, visual: 1, fan: 2, viral: 2, divisor: 11 },
        "Vocal-Rap-Visual Ace":     { vocal: 2, rap: 2, visual: 2, dance: 1, fan: 2, viral: 2, divisor: 11 },
        "Vocal-Dance-Visual Ace":   { vocal: 2, dance: 2, visual: 2, rap: 1, fan: 2, viral: 2, divisor: 11 },
        "Rap-Dance-Visual Ace":     { vocal: 1, rap: 2, dance: 2, visual: 2, fan: 2, viral: 2, divisor: 11 },
    };
    const weight = roleWeights[role] || { vocal: 1, rap: 1, dance: 1, visual: 1, fan: 2, viral: 2, divisor: 8 };
    const total =
        stats.vocal * weight.vocal +
        stats.rap * weight.rap +
        stats.dance * weight.dance +
        stats.visual * weight.visual +
        stats.fan * weight.fan +
        stats.viral * weight.viral;
    return Math.round(total / weight.divisor);
}

const processedIdols = idols.map(idol => {
    const stats = { ...idol.stats };
    const boost = seasonBoosts[idol.season] || {};
    Object.keys(boost).forEach(k => {
        stats[k] = Math.min((stats[k] || 0) + boost[k], 100);
    });
    stats.overall = calculateOverall(stats, idol.role);
    return { ...idol, stats };
});

function getOpenedCards() {
    const history = JSON.parse(localStorage.getItem("idolHistory") || "[]");
    const izone = JSON.parse(localStorage.getItem("izoneCollection") || "[]");

    const allOpened = [...history, ...izone];
    const names = [...new Set(allOpened.map(card => card.name))];
    return names;
}

function generateSeasonTags() {
    const allSeasons = [...new Set(processedIdols.map(i => i.season))];
    seasonTagContainer.innerHTML = `<button class="tag" data-season="all">ALL</button>`;
    allSeasons.forEach(season => {
        const btn = document.createElement("button");
        btn.className = "tag";
        btn.innerText = season;
        btn.dataset.season = season;
        seasonTagContainer.appendChild(btn);
    });

    seasonTagContainer.addEventListener("click", e => {
        if (e.target.dataset.season) {
            currentSeasonFilter = e.target.dataset.season;
            currentPage = 1;
        renderFullCollection();
        }
    });
}

function paginateArray(array, page, perPage) {
    const start = (page - 1) * perPage;
    return array.slice(start, start + perPage);
}

function renderPagination(total) {
    const totalPages = Math.ceil(total / CARDS_PER_PAGE);
    let pages = [];

    if (totalPages <= 7) {
        pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
        if (currentPage <= 4) {
            pages = [1, 2, 3, 4, 5, "...", totalPages];
        } else if (currentPage >= totalPages - 3) {
            pages = [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
        }
    }

    pagination.innerHTML = pages
        .map(p =>
        typeof p === "number"
            ? `<button class="page-btn ${p === currentPage ? "active" : ""}" data-page="${p}">${p}</button>`
            : `<span class="dots">...</span>`
        )
        .join("");

    pagination.querySelectorAll(".page-btn").forEach(btn => {
        btn.addEventListener("click", () => {
        currentPage = parseInt(btn.dataset.page);
        renderFullCollection();
        window.scrollTo({
            top: document.getElementById("full-card-grid").offsetTop - 100
        });
        });
    });
}

function renderFullCollection() {
    const opened = getOpenedCards();
    let display = processedIdols;
    if (currentSeasonFilter !== "all") {
        display = display.filter(i => i.season === currentSeasonFilter);
    }

    display = display.filter(i => {
        const isOpened = opened.includes(i.name);
        if (!showOpenedCheckbox.checked && isOpened) return false;
        if (!showUnopenedCheckbox.checked && !isOpened) return false;
        return true;
    });

    const paged = paginateArray(display, currentPage, CARDS_PER_PAGE);

    fullGrid.innerHTML = "";
    paged.forEach(idol => {
        const div = document.createElement("div");
        const openedBefore = opened.includes(idol.name);
        const glowMap = {
            "ICONS": "glow-icons",
            "TOP STARS": "glow-top-stars",
            "IZ*ONE SPECIAL": "glow-izone-special",
            "NEW GEN": "glow-new-gen",
            "UNSUNG IDOLS": "glow-unsung-idols",
            "NATIONALLY": "glow-nationally",
            "SURVIVAL": "glow-survival",
            "GROUP'S FACE": "glow-group-face",
            "LONE RANGER": "glow-lone-ranger",
            "BEST VOICE": "glow-best-voice",
            "DANCE MACHINE": "glow-dance-machine",
            "TOP VISUAL": "glow-top-visual",
            "RAP COOL": "glow-rap-cool",
            "FOREIGN SOLDIER": "glow-foreign-soldier",
            "PRE DEBUT": "glow-pre-debut",
            "SPORT LIGHT": "glow-sport-light",
            "VERSATILE": "glow-versatile",
            "RISE UP": "glow-rise-up",
            "LAST DANCE": "glow-last-dance",
            "CUP TROPHY": "glow-cup-trophy",
            "HARD WORKER": "glow-hard-worker",
            "LOYAL BOND": "glow-loyal-bond",
            "ULTIMATE SKILLS": "glow-ultimate-skills",
            "NATIONAL SONG": "glow-national-song",
            "TOP CRUSH": "glow-top-crush",
            "DINOSAUR ROOKIE": "glow-dinosaur-rookie",
            "RETURNS": "glow-returns",
            "ANTI HERO": "glow-anti-hero",
            "ONE HIT": "glow-one-hit",
            "MULTIVERSE": "glow-multiverse"
        };
        const glowClass = glowMap[idol.season];
        div.className = `history-card ${openedBefore && glowClass ? glowClass : "unopened"}`;

        div.innerHTML = `
            <img src="${idol.img}" alt="${idol.name}" class="history-card-avatar">
            <h3>${idol.name}</h3>
            <p>${idol.season}</p>
            <div class="history-card-group-wrapper">
                <img src="${idol.group}" class="history-card-group">
            </div>
            <h2>${idol.stats.overall}</h2>
            <img src="${idol.flag}" class="history-card-country">
        `;
        fullGrid.appendChild(div);
    });
    cardCounter.innerText = `Opened ${opened.length} /${processedIdols.length} cards`;
    renderPagination(display.length);
}

showOpenedCheckbox.addEventListener("change", renderFullCollection);
showUnopenedCheckbox.addEventListener("change", renderFullCollection);

// Setup
generateSeasonTags();
renderFullCollection();
