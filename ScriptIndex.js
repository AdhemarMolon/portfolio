function createClock() {
    let clockContainer = document.getElementById("clock-container");
    if (!clockContainer) {
        console.error("Elemento #clock-container não encontrado!");
        return;
    }
    let clock = document.createElement("div");
    clock.className = "clock";
    clock.innerHTML = `
        <div class="digit" id="h1"><span>0</span></div>
        <div class="digit" id="h2"><span>0</span></div>
        <span>:</span>
        <div class="digit" id="m1"><span>0</span></div>
        <div class="digit" id="m2"><span>0</span></div>
        <span>:</span>
        <div class="digit" id="s1"><span>0</span></div>
        <div class="digit" id="s2"><span>0</span></div>
    `;
    clockContainer.appendChild(clock);
}

function updateClock() {
    let now = new Date();
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById("h1").innerHTML = `<span>${h[0]}</span>`;
    document.getElementById("h2").innerHTML = `<span>${h[1]}</span>`;
    document.getElementById("m1").innerHTML = `<span>${m[0]}</span>`;
    document.getElementById("m2").innerHTML = `<span>${m[1]}</span>`;
    document.getElementById("s1").innerHTML = `<span>${s[0]}</span>`;
    document.getElementById("s2").innerHTML = `<span>${s[1]}</span>`;
}

createClock();
setInterval(updateClock, 1000);
updateClock();