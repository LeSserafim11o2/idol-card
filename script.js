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

// Audio setup
const audio = new Audio("./Music/AiLaTrieuPhu.mp3");
const vitas = new Audio("./Music/vitas_7th_element.mp3");

// Season rates for rarity
const seasonRates = {
    "IZ*ONE SPECIAL": 0.01,
    "ICONS": 0.04,
    "TOP STARS": 0.05,
    "NEW GEN": 0.3,
    "UNSUNG IDOLS": 0.3,
    "NATIONALLY": 0.3
};

// Initialize idol stats (run once)
const processedIdols = idols.map(idol => {
    const stats = { ...idol.stats };
    
    if (idol.group.includes("SNSD")) {
        Object.keys(stats).forEach(key => key !== 'overall' && (stats[key] += 13));
    } else if (idol.group.includes("Izone")) {
        stats.vocal += 15; stats.rap += 15; stats.visual += 15; stats.dance += 15;
        stats.fan += 20; stats.viral += 20;
    } else if (idol.group.includes("Blackpink")) {
        stats.vocal += 7; stats.rap += 7; stats.visual += 7; stats.dance += 7;
        stats.fan += 9; stats.viral += 9;
    } else if (idol.group.includes("RedVelvet")) {
        stats.vocal += 9; stats.rap += 9; stats.visual += 9; stats.dance += 9;
        stats.fan += 11; stats.viral += 11;
    } else if (idol.group.includes("Twice")) {
        stats.vocal += 8; stats.rap += 8; stats.visual += 8; stats.dance += 8;
        stats.fan += 10; stats.viral += 10;
    } else if (idol.group.includes("4Minute") || idol.group.includes("Gidle") || 
               idol.group.includes("Ive") || idol.group.includes("H2H") || 
               idol.group.includes("Fromis9")) {
        Object.keys(stats).forEach(key => key !== 'overall' && (stats[key] += 2));
    } else if (idol.group.includes("BEG")) {
        stats.vocal += 4; stats.rap += 4; stats.visual += 4; stats.dance += 4;
        stats.fan += 2; stats.viral += 2;
    } else if (idol.group.includes("Newjeans") || idol.group.includes("Aespa") ||
               idol.group.includes("WG") || idol.group.includes("Fx")) {
        stats.vocal += 5; stats.rap += 5; stats.visual += 5; stats.dance += 5;
        stats.fan += 7; stats.viral += 7;
    } else if (idol.group.includes("Tara") || idol.group.includes("2NE1")) {
        stats.vocal += 8; stats.rap += 8; stats.visual += 8; stats.dance += 8;
        stats.fan += 10; stats.viral += 10;
    } else if (idol.group.includes("LeSserafim") || idol.group.includes("Gfriend") ||
               idol.group.includes("Itzy") || idol.group.includes("Sistar") ||
               idol.group.includes("Kara")) {
        stats.vocal += 2; stats.rap += 2; stats.visual += 2; stats.dance += 2;
        stats.fan -= 1; stats.viral -= 1;
    } else if (idol.group.includes("Momoland") || idol.group.includes("IOI") ||
               idol.group.includes("MissA")) {
        stats.vocal -= 1; stats.rap -= 1; stats.visual -= 1; stats.dance -= 1;
        stats.fan -= 3; stats.viral -= 3;
    } else if (idol.group.includes("StayC") || idol.group.includes("Baemon") ||
               idol.group.includes("Nmixx") || idol.group.includes("Kep1er") ||
               idol.group.includes("Apink")) {
        stats.vocal -= 2; stats.rap -= 2; stats.visual -= 2; stats.dance -= 2;
        stats.fan -= 6; stats.viral -= 6;
    } else if (idol.group.includes("ILLIT") || idol.group.includes("Everglow")) {
        stats.vocal -= 4; stats.rap -= 4; stats.visual -= 4; stats.dance -= 4;
        stats.fan -= 7; stats.viral -= 7;
    } else if (idol.group.includes("Meovv") || idol.group.includes("KOL") ||
               idol.group.includes("Loona") || idol.group.includes("GirlsDay") ||
               idol.group.includes("AOA") || idol.group.includes("OhMyGirl") ||
               idol.group.includes("Exid")) {
        stats.vocal -= 4; stats.rap -= 4; stats.visual -= 4; stats.dance -= 4;
        stats.fan -= 8; stats.viral -= 8;
    } else if (idol.group.includes("Mamamoo")) {
        stats.vocal += 2; stats.rap += 2; stats.visual += 2; stats.dance += 2;
        stats.fan += 3; stats.viral += 3;
    } else {
        stats.vocal -= 4; stats.rap -= 4; stats.visual -= 4; stats.dance -= 4;
        stats.fan -= 7; stats.viral -= 7;
    }
    
    // Cap stats at 100
    Object.keys(stats).forEach(key => {
        if (key !== 'overall') stats[key] = Math.min(stats[key], 100);
    });
    
    // Calculate overall
    stats.overall = Math.round(
        (stats.vocal + stats.rap + stats.dance + stats.visual + (stats.fan * 2) + (stats.viral * 2)) / 8
    );
    
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
    const weights = processedIdols.map(idol => seasonRates[idol.season] || 0.01);
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    
    let random = Math.random() * totalWeight;
    for (let i = 0; i < processedIdols.length; i++) {
        random -= weights[i];
        if (random <= 0) return processedIdols[i];
    }
    return processedIdols[0]; // fallback
}

// Apply card effects
function applyEffect(card) {
    setTimeout(() => card.classList.add("show-image"), 50);
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

// Main card opening function
function openCard() {
    applyEffect(card);
    playMusic();
    resetCard();
    btn.disabled = true;
    siu.disabled = true;
    
    const randomIdol = getRandomIdol();
    
    // Apply glow effect based on season
    card.classList.remove("glow-gold", "glow-pink", "glow-white", "glow-blue", "glow-purple", "glow-black");
    const glowMap = {
        "ICONS": "glow-gold",
        "IZ*ONE SPECIAL": "glow-pink",
        "NEW GEN": "glow-white",
        "UNSUNG IDOLS": "glow-blue",
        "NATIONALLY": "glow-purple",
        "TOP STARS": "glow-black"
    };
    const glowClass = glowMap[randomIdol.season];
    if (glowClass) card.classList.add(glowClass);
    
    // Reveal information with timing
    setTimeout(() => {
        country.src = randomIdol.flag;
        country.classList.add("show-image");
    }, 2000);
    
    setTimeout(() => {
        season.innerText = randomIdol.season;
        season.classList.add("show");
    }, 4000);
    
    setTimeout(() => {
        role.innerText = randomIdol.role;
        role.classList.add("show");
        
        // Stats
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
    }, 6000);
    
    setTimeout(() => {
        group.src = randomIdol.group;
        group.classList.add("show-image");
    }, 8000);
    
    setTimeout(() => {
        name.innerText = randomIdol.name;
        name.classList.add("show");
        avatar.src = randomIdol.img;
        avatar.classList.add("show-image");
        btn.disabled = false;
        siu.disabled = false;
    }, 10000);
}

// Event listeners
btn.addEventListener("click", openCard);
siu.addEventListener("click", openCongratulation);