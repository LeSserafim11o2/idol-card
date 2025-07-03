import idols from "./idols.js";
// DOM elements
const card = document.getElementById("idol-card");
const name = card.querySelector(".name");
const group = card.querySelector(".group");
const role = card.querySelector(".role");
const season = card.querySelector(".season");
const avatar = card.querySelector(".avatar");
const country = card.querySelector(".country");
const vocal = card.querySelector(".vocal");
const rap = card.querySelector(".rap");
const dance = card.querySelector(".dance");
const visual = card.querySelector(".visual");
const fan = card.querySelector(".fan");
const viral = card.querySelector(".viral");
const overall = card.querySelector(".overall");
const btn = document.getElementById("open-btn");
const siu = document.getElementById("siu-btn");
const loadingOverlay = document.getElementById("loading-overlay");

const historyGrid = document.getElementById("history-grid");
const clearHistoryBtn = document.getElementById("clear-history");
const confirmModal = document.getElementById("confirm-modal");
const confirmDelete = document.getElementById("confirm-delete");
const cancelDelete = document.getElementById("cancel-delete");
const seasonFilter = document.getElementById("season-filter");
const packLabel = document.getElementById("pack-label");
const packSelect = document.getElementById("season-pack");


let skip = false;
let timeouts = [];

const skipBtn = document.getElementById("skip-btn");

function clearAllTimeouts() {
    timeouts.forEach(clearTimeout);
    timeouts = [];
}

// Audio setup
const audio = new Audio("./Music/AiLaTrieuPhu.mp3");
const vitas = new Audio("./Music/vitas_7th_element.mp3");

// Season rates for rarity
const seasonRates = {
    "IZ*ONE SPECIAL": 0.01, "GROUP'S FACE": 0.02, "ICONS": 0.02, "TOP STARS": 0.02, "NEW GEN": 0.03, "UNSUNG IDOLS": 0.036,
    "NATIONALLY": 0.036, "SURVIVAL": 0.036, "LONE RANGER": 0.036, "BEST VOICE": 0.036, "DANCE MACHINE": 0.036, "TOP VISUAL": 0.036,
    "RAP COOL": 0.036, 'FOREIGN SOLDIER': 0.036, 'PRE DEBUT': 0.036, 'SPORT LIGHT': 0.036, 'VERSATILE': 0.036, 'RISE UP' :0.036,
    'LAST DANCE': 0.036, 'CUP TROPHY': 0.036, 'HARD WORKER': 0.036, 'LOYAL BOND': 0.036, 'ULTIMATE SKILLS': 0.036, 'NATIONAL SONG': 0.036, 
    'TOP CRUSH': 0.036, 'DINOSAUR ROOKIE': 0.036, 'RETURNS': 0.036, 'ANTI HERO': 0.036, 'ONE HIT': 0.036, 'MULTIVERSE': 0.036
};

const seasonBoosts = {
    "ICONS":      { vocal: 3, rap: 3, dance: 3, visual: 3, fan: 5, viral: 5 },
    "TOP STARS":  { vocal: 1, rap: 1, dance: 1, visual: 1, fan: 2, viral: 2 },
    "IZ*ONE SPECIAL": { vocal: 15, rap: 15, dance: 15, visual: 15, fan: 15, viral: 15 },
    "NEW GEN":    { vocal: -2, rap: -2, dance: -2, visual: -2, fan: -2, viral: -2 },
    "UNSUNG IDOLS": { vocal: -3, rap: -3, dance: -3, visual: -3, fan: -3, viral: -3 },
    "NATIONALLY": { vocal: -3, rap: -3, dance: -3, visual: -3, fan: -3, viral: -3 },
    "SURVIVAL": { vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    "GROUP'S FACE": { vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    "LONE RANGER": { vocal: -5, rap: -5, dance: -5, visual: -5, fan: -5, viral: -5 },
    "BEST VOICE": { vocal: -5, rap: -5, dance: -5, visual: -5, fan: -5, viral: -5 },
    "DANCE MACHINE": { vocal: -5, rap: -5, dance: -5, visual: -5, fan: -5, viral: -5 },
    "TOP VISUAL": { vocal: -5, rap: -5, dance: -5, visual: -5, fan: -5, viral: -5 },
    "RAP COOL": { vocal: -5, rap: -5, dance: -5, visual: -5, fan: -5, viral: -5 },
    'FOREIGN SOLDIER': { vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    'PRE DEBUT': { vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    'SPORT LIGHT':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    'VERSATILE':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    'RISE UP':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 },
    'LAST DANCE':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }, 
    'CUP TROPHY':{ vocal: -2, rap: -2, dance: -2, visual: -2, fan: -2, viral: -2 },
    'HARD WORKER':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }, 
    'LOYAL BOND':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }, 
    'ULTIMATE SKILLS':{ vocal: -3, rap: -3, dance: -3, visual: -3, fan: -3, viral: -3 }, 
    'NATIONAL SONG':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }, 
    'TOP CRUSH':{ vocal: -2, rap: -2, dance: -2, visual: -2, fan: -4, viral: -4 }, 
    'DINOSAUR ROOKIE':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }, 
    'RETURNS':{ vocal: -3, rap: -3, dance: -3, visual: -3, fan: -4, viral: -4 }, 
    'ANTI HERO':{ vocal: -2, rap: -2, dance: -2, visual: -2, fan: -3, viral: -3 }, 
    'ONE HIT':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }, 
    'MULTIVERSE':{ vocal: 0, rap: 0, dance: 0, visual: 0, fan: 0, viral: 0 }
};

function calculateOverall(stats, role) {
    const { vocal, rap, dance, visual, fan, viral } = stats;

    // Map role to weights
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
        vocal * weight.vocal +
        rap * weight.rap +
        dance * weight.dance +
        visual * weight.visual +
        fan * weight.fan +
        viral * weight.viral;

    return Math.round(total / weight.divisor);
}

// Initialize idol stats
const processedIdols = idols.map(idol => {
    const stats = { ...idol.stats };

    // Boost follow season
    const boost = seasonBoosts[idol.season];
    if (boost) {
        Object.keys(boost).forEach(key => {
            stats[key] += boost[key];
        });
    }

    // Cap stats 100
    Object.keys(stats).forEach(key => {
        if (key !== 'overall') stats[key] = Math.min(stats[key], 100);
    });

    // overall
    stats.overall = calculateOverall(stats, idol.role);

    return { ...idol, stats };
});

// Audio functions
function playMusic() {
    stopAllAudio();
    audio.play();
}

function openCongratulation() {
    stopAllAudio();
    vitas.play();
}

function stopAllAudio() {
    [audio, vitas].forEach(aud => {
        aud.pause();
        aud.currentTime = 0;
    });
}

// Get random idol based on season rarity
function getRandomIdol() {
    const selectedSeason = document.getElementById("season-pack")?.value || "all";
    let idolPool;
    if (selectedSeason === "all") {
        idolPool = processedIdols;
    } else {
        idolPool = processedIdols.filter(idol => idol.season === selectedSeason);
    }
    if (idolPool.length === 0) return null;

    const weights = idolPool.map(idol => seasonRates[idol.season] || 0.01);
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

    let random = Math.random() * totalWeight;
    for (let i = 0; i < idolPool.length; i++) {
        random -= weights[i];
        if (random <= 0) return idolPool[i];
    }
    return idolPool[0];
}

// Update pack name when change the season
packSelect.addEventListener("change", () => {
    const season = packSelect.value;
    if (season === "all") {
        packLabel.innerText = "Open All Season Pack";
    } else {
        packLabel.innerText = `Open Season Pack ${season}`;
    }
});

// Check iz*one season function
function checkSeasonUnlock() {
    const izoneCollection = JSON.parse(localStorage.getItem("izoneCollection") || "[]");

    const seasonSelect = document.getElementById("season-pack");
    const unlockMsg = document.getElementById("unlock-msg");

    const requiredCount = 12;
    const collectedCount = izoneCollection.length;

    if (collectedCount >= requiredCount) {
        seasonSelect.classList.remove("hidden");
        unlockMsg.innerText = "You have collected all Iz*one's members and unlocked choose season mode!";
    } else {
        const remain = requiredCount - collectedCount;
        seasonSelect.classList.add("hidden");
        unlockMsg.innerText = `Need more ${remain} IZ*ONE's members to open choose season mode!`;
    }
}

// Apply card effects
function applyEffect(card) {
    setTimeout(() => card.classList.add("show-image"), 50);
}

function preloadImages(urls) {
    const promises = urls.map(
        url => new Promise(resolve => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = resolve;
        })
    );
    return Promise.all(promises);
}

// Reset card to initial state
function resetCard() {
    name.innerText = "Idol Kpop";
    group.src = "";
    role.innerText = "Role";
    season.innerText = "Season";
    avatar.src = "";
    country.src = "";
    vocal.innerText = "🎤 Vocal: N/A";
    rap.innerText = "🎧 Rap: N/A";
    dance.innerText = "💃 Dance: N/A";
    visual.innerText = "🌟 Visual: N/A";
    fan.innerText = "👥 Fan: N/A";
    viral.innerText = "🔥 Viral: N/A";
    overall.innerText = "N/A";
    
    document.querySelectorAll(".show, .show-image").forEach(el => 
        el.classList.remove("show", "show-image")
    );
}

function showLoading() {
    loadingOverlay.classList.add("show");
}

function hideLoading() {
    loadingOverlay.classList.remove("show");
}

function skipReveal(randomIdol) {
    clearAllTimeouts();
    hideLoading();

    country.src = randomIdol.flag;
    country.classList.add("show-image");

    season.innerText = randomIdol.season;
    season.classList.add("show");

    role.innerText = randomIdol.role;
    role.classList.add("show");

    vocal.innerText = `🎤 Vocal: ${randomIdol.stats.vocal}`;
    rap.innerText = `🎧 Rap: ${randomIdol.stats.rap}`;
    dance.innerText = `💃 Dance: ${randomIdol.stats.dance}`;
    visual.innerText = `🌟 Visual: ${randomIdol.stats.visual}`;
    fan.innerText = `👥 Fan: ${randomIdol.stats.fan}`;
    viral.innerText = `🔥 Viral: ${randomIdol.stats.viral}`;
    overall.innerText = randomIdol.stats.overall;

    [role, vocal, rap, dance, visual, fan, viral, overall].forEach(el =>
        el.classList.add("show")
    );

    group.src = randomIdol.group;
    group.classList.add("show-image");

    name.innerText = randomIdol.name;
    name.classList.add("show");

    avatar.src = randomIdol.img;
    avatar.classList.add("show-image");

    btn.disabled = false;
    siu.disabled = false;
    skipBtn.disabled = true;

    saveToHistory(randomIdol);
}
// Main card opening function
async function openCard() {
    return new Promise(async (resolve) => {
        resetCard();
        applyEffect(card);
        playMusic();
        btn.disabled = true;
        siu.disabled = true;
        skip = false;
        skipBtn.disabled = false;

        const skipWatcher = setInterval(() => {
            if (skip) {
                clearInterval(skipWatcher);
                clearAllTimeouts();
                skipReveal(idol);
                skip = false;
                resolve();
            }
        }, 100);

        showLoading();

        const idol = getRandomIdol();
        await preloadImages([idol.img, idol.flag, idol.group]);

        if (skip) {
            skipReveal(idol);
            skip = false;
            resolve();
            return;
        }

        hideLoading();

        card.classList.remove(
            'glow-izone-special', 'glow-group-face', 'glow-icons', 'glow-top-stars', 'glow-new-gen', 'glow-unsung-idols', 'glow-nationally', 'glow-survival', 'glow-lone-ranger', 
            'glow-best-voice', 'glow-dance-machine', 'glow-top-visual', 'glow-rap-cool', 'glow-foreign-soldier', 'glow-pre-debut', 'glow-sport-light', 'glow-versatile', 'glow-rise-up',
            'glow-last-dance', 'glow-cup-trophy', 'glow-hard-worker', 'glow-loyal-bond', 'glow-ultimate-skills', 'glow-national-song', 'glow-top-crush', 'glow-dinosaur-rookie', 
            'glow-returns', 'glow-anti-hero', 'glow-one-hit', 'glow-multiverse'
        );
        const glowMap = {
            "ICONS": 'glow-icons', 
            "TOP STARS": 'glow-top-stars', 
            "IZ*ONE SPECIAL": 'glow-izone-special', 
            "NEW GEN": 'glow-new-gen', 
            "UNSUNG IDOLS": 'glow-unsung-idols', 	
            "NATIONALLY": 'glow-nationally', 
            "SURVIVAL": 'glow-survival',
            "GROUP'S FACE": 'glow-group-face', 
            "LONE RANGER": 'glow-lone-ranger', 
            "BEST VOICE": 'glow-best-voice', 
            "DANCE MACHINE": 'glow-dance-machine', 
            "TOP VISUAL": 'glow-top-visual', 
            "RAP COOL": 'glow-rap-cool',
            'FOREIGN SOLDIER': 'glow-foreign-soldier', 
            'PRE DEBUT': 'glow-pre-debut', 
            'SPORT LIGHT': 'glow-sport-light',
            'VERSATILE': 'glow-versatile',
            'RISE UP': 'glow-rise-up',
            'LAST DANCE': 'glow-last-dance', 
	        'CUP TROPHY': 'glow-cup-trophy',
            'HARD WORKER': 'glow-hard-worker',
            'LOYAL BOND': 'glow-loyal-bond',
            'ULTIMATE SKILLS': 'glow-ultimate-skills',
            'NATIONAL SONG': 'glow-national-song',
            'TOP CRUSH': 'glow-top-crush',
	        'DINOSAUR ROOKIE': 'glow-dinosaur-rookie',
            'RETURNS': 'glow-returns',
            'ANTI HERO': 'glow-anti-hero',
            'ONE HIT': 'glow-one-hit',
            'MULTIVERSE': 'glow-multiverse'
        };
        const glowClass = glowMap[idol.season];
        if (glowClass) card.classList.add(glowClass);

        timeouts.push(setTimeout(() => {
            country.src = idol.flag;
            country.classList.add("show-image");
        }, 2000));

        timeouts.push(setTimeout(() => {
            season.innerText = idol.season;
            season.classList.add("show");
        }, 4000));

        timeouts.push(setTimeout(() => {
            role.innerText = idol.role;
            role.classList.add("show");

            vocal.innerText = `🎤 Vocal: ${idol.stats.vocal}`;
            rap.innerText = `🎧 Rap: ${idol.stats.rap}`;
            dance.innerText = `💃 Dance: ${idol.stats.dance}`;
            visual.innerText = `🌟 Visual: ${idol.stats.visual}`;
            fan.innerText = `👥 Fan: ${idol.stats.fan}`;
            viral.innerText = `🔥 Viral: ${idol.stats.viral}`;
            overall.innerText = idol.stats.overall;

            [role, vocal, rap, dance, visual, fan, viral, overall].forEach(el =>
                el.classList.add("show")
            );
        }, 6000));

        timeouts.push(setTimeout(() => {
            group.src = idol.group;
            group.classList.add("show-image");
        }, 8000));

        timeouts.push(setTimeout(() => {
            name.innerText = idol.name;
            name.classList.add("show");
            avatar.src = idol.img;
            avatar.classList.add("show-image");

            btn.disabled = false;
            siu.disabled = false;
            skipBtn.disabled = true;
            saveToHistory(idol);
            resolve();
            clearInterval(skipWatcher);
        }, 10000));
    });
}

// Event listeners
btn.addEventListener("click", openCard);
siu.addEventListener("click", openCongratulation);
seasonFilter.addEventListener("change", renderHistory);

function updateSeasonFilterOptions() {
    const history = JSON.parse(localStorage.getItem("idolHistory") || "[]");
    const uniqueSeasons = [...new Set(history.map(entry => entry.season))];
    const select = document.getElementById("season-filter");

    select.innerHTML = '<option value="all">--- ALL ---</option>';
    uniqueSeasons.forEach(season => {
        const opt = document.createElement("option");
        opt.value = season;
        opt.innerText = season;
        select.appendChild(opt);
    });
}

function saveToHistory(idol) {
    let history = JSON.parse(localStorage.getItem("idolHistory") || "[]");
    history.unshift({
        name: idol.name,
        season: idol.season,
        group: idol.group,
        avatar: idol.img,
        overall: idol.stats.overall,
        country: idol.flag,
        timestamp: new Date().toLocaleString()
    });
    history = history.slice(0, 100);
    localStorage.setItem("idolHistory", JSON.stringify(history));
    renderHistory();

    // Save IZ*ONE SPECIAL
    if (idol.season === "IZ*ONE SPECIAL") {
        let izoneCollection = JSON.parse(localStorage.getItem("izoneCollection") || "[]");
        const alreadyExists = izoneCollection.some(card => card.name === idol.name);
        if (!alreadyExists) {
            izoneCollection.push({
                name: idol.name,
                season: idol.season,
                group: idol.group,
                avatar: idol.img,
                overall: idol.stats.overall,
                country: idol.flag,
                timestamp: new Date().toLocaleString()
            });
            localStorage.setItem("izoneCollection", JSON.stringify(izoneCollection));
        }
    }
    updateSeasonFilterOptions();
    checkSeasonUnlock();
}

function renderHistory() {
    const filterValue = seasonFilter.value;
    let history = JSON.parse(localStorage.getItem("idolHistory") || "[]");

    if (filterValue !== "all") {
        history = history.filter(entry => entry.season === filterValue);
    }
    historyGrid.innerHTML = "";
    const glowMap = {
        "ICONS": 'glow-icons', 
        "TOP STARS": 'glow-top-stars', 
        "IZ*ONE SPECIAL": 'glow-izone-special', 
        "NEW GEN": 'glow-new-gen', 
        "UNSUNG IDOLS": 'glow-unsung-idols', 	
        "NATIONALLY": 'glow-nationally', 
        "SURVIVAL": 'glow-survival',
        "GROUP'S FACE": 'glow-group-face', 
        "LONE RANGER": 'glow-lone-ranger', 
        "BEST VOICE": 'glow-best-voice', 
        "DANCE MACHINE": 'glow-dance-machine', 
        "TOP VISUAL": 'glow-top-visual', 
        "RAP COOL": 'glow-rap-cool',
        'FOREIGN SOLDIER': 'glow-foreign-soldier', 
        'PRE DEBUT': 'glow-pre-debut', 
        'SPORT LIGHT': 'glow-sport-light',
        'VERSATILE': 'glow-versatile',
        'RISE UP': 'glow-rise-up',
        'LAST DANCE': 'glow-last-dance', 
	    'CUP TROPHY': 'glow-cup-trophy',
        'HARD WORKER': 'glow-hard-worker',
        'LOYAL BOND': 'glow-loyal-bond',
        'ULTIMATE SKILLS': 'glow-ultimate-skills',
        'NATIONAL SONG': 'glow-national-song',
        'TOP CRUSH': 'glow-top-crush',
        'DINOSAUR ROOKIE': 'glow-dinosaur-rookie',
        'RETURNS': 'glow-returns',
        'ANTI HERO': 'glow-anti-hero',
        'ONE HIT': 'glow-one-hit',
        'MULTIVERSE': 'glow-multiverse'
    };
    history.forEach(entry => {
        const div = document.createElement("div");
        div.className = `history-card ${glowMap[entry.season] || ""}`;
        div.innerHTML = `
            <img src="${entry.avatar}" alt="${entry.name}" class="history-card-avatar">
            <h3>${entry.name}</h3>
            <p>${entry.season}</p>
            <div class="history-card-group-wrapper"><img src="${entry.group}" alt="${entry.name}" class="history-card-group"></div>
            <h2>${entry.overall}</h2>
            <img src="${entry.country}" alt="${entry.country}" class="history-card-country">
        `;
        historyGrid.appendChild(div);
    });
}

function renderIZONECollection() {
    const izone = JSON.parse(localStorage.getItem("izoneCollection") || "[]");
    const grid = document.getElementById("izone-grid");
    grid.innerHTML = "";

    izone.forEach(entry => {
        const div = document.createElement("div");
        div.className = `history-card glow-izone-special`;
        div.innerHTML = `
            <img src="${entry.avatar}" alt="${entry.name}" class="history-card-avatar">
            <h3>${entry.name}</h3>
            <p>${entry.season}</p>
            <div class="history-card-group-wrapper"><img src="${entry.group}" class="history-card-group"></div>
            <h2>${entry.overall}</h2>
            <img src="${entry.country}" alt="${entry.country}" class="history-card-country">
        `;
        grid.appendChild(div);
    });
}

renderHistory();
renderIZONECollection();

function lockBodyScroll() {
    document.body.style.overflow = "hidden";
}
function unlockBodyScroll() {
    document.body.style.overflow = "";
}

skipBtn.addEventListener("click", () => {
    skip = true;
});

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !skipBtn.disabled) {
        e.preventDefault();
        skip = true;
    }
});

clearHistoryBtn.addEventListener("click", () => {
    confirmModal.classList.remove("hidden");
    lockBodyScroll();
});

confirmDelete.addEventListener("click", () => {
    localStorage.removeItem("idolHistory");
    renderHistory();
    confirmModal.classList.add("hidden");
    unlockBodyScroll();
});

cancelDelete.addEventListener("click", () => {
    confirmModal.classList.add("hidden");
    unlockBodyScroll();
});

confirmModal.addEventListener("click", (e) => {
    if (e.target === confirmModal) {
        confirmModal.classList.add("hidden");
        unlockBodyScroll();
    }
});

window.onload = () => {
    updateSeasonFilterOptions();
    renderHistory();
    renderIZONECollection();
    checkSeasonUnlock();
};
