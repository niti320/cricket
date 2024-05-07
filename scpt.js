let tryvalue = 1;
const values = [0, 1, 2, 3, 4, 6, "OUT"];
const result = document.getElementById("runs");
const sruns = document.querySelector('.sruns');
const swickets = document.querySelector('.swickets');
let sovers = document.querySelector('.overnumber');
let sball = document.querySelector('.ballnumber');
let playername = document.getElementById("playername");
let finalscore = document.querySelector(".finalscore");
let finalovers = document.querySelector(".finalovers");



function setRandomValue() {
    sball.textContent++;
    if (sball.textContent > 5) {
        sball.textContent = 0;
        sovers.textContent++;
    }


    result.style.display = "none";
    document.querySelector(".animbox").style.display = "flex";
    document.querySelector(".submit").style.visibility = "hidden";

    setTimeout(function () {
        const randomIndex = Math.floor(Math.random() * values.length);
        const randomValue = values[randomIndex];
        runs.textContent = randomValue;

        document.querySelector(".animbox").style.display = "none";
    document.querySelector(".submit").style.visibility = "visible";

        result.style.display = "flex";

        result.style.color = "#16caa9";
        setTimeout(function () {
            result.style.color = "white";
        }, 200);

        if (randomValue === "OUT") {
            let wicketsCount = parseInt(swickets.textContent);
            swickets.textContent = wicketsCount + 1;
            if (wicketsCount >= 9) {
                endGame();
            }
        } else {
            let runsCount = parseInt(sruns.textContent);
            sruns.textContent = runsCount + randomValue;
        }
    }, 1000);
}


function playgame() {
    document.querySelector(".game").style.display = "inline";
    document.querySelector(".openingscreen").style.display = "none";
    let samplename = document.getElementById("introname").value;
    if (samplename == "") {
        playername.textContent = "Behn Ka Bhai MC";

    }
    else {
        playername.textContent = samplename;
    }
}


function endGame() {
    document.querySelector(".game").style.display = "none";
    document.querySelector(".openingscreen").style.display = "none";
    document.querySelector(".endscreen").style.display = "flex";


    finalscore.textContent = sruns.textContent + " / " + swickets.textContent;
    finalovers.textContent = sovers.textContent + " . " + sball.textContent;

}

function retry() {
    tryvalue++;
    document.querySelector(".game").style.display = "inline";
    document.querySelector(".openingscreen").style.display = "none";
    document.querySelector(".endscreen").style.display = "none";

    sruns.textContent = 0;
    swickets.textContent = 0;
    sball.textContent = 0;
    sovers.textContent = 0;
    result.textContent = 0;

    document.getElementById("tryval").textContent = tryvalue;

}
