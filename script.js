let tryvalue = 1;
const values = [0, 1, 2, 3,4,4,4,6,6,6,6];
const result = document.getElementById("runs");
const sruns = document.querySelector('.sruns');
let teamname = document.getElementById("required");
const swickets = document.querySelector('.swickets');
let sovers = document.querySelector('.overnumber');
let sball = document.querySelector('.ballnumber');
let playername = document.getElementById("playername");
let finalscore = document.querySelector(".finalscore");
let finalovers = document.querySelector(".finalovers");
let shownresult = document.getElementById("yourresult");
let statusbar = document.querySelector(".status");
let statuscontent = document.getElementById("currentstatus");


let selectedValue = null;
let selectedTeam = null;

const buttons = document.querySelectorAll('.bttns');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = parseInt(this.textContent);
        selectedValue = value;
        document.getElementById("yourchoicee").textContent = selectedValue;

        setRandomValue();
        
    });
});


function setRandomValue() {
    sball.textContent++;
    if (sball.textContent > 5) {
        sball.textContent = 0;
        sovers.textContent++;
    }


    result.style.visibility = "hidden";
    document.querySelector(".animbox").style.visibility = "visible";
    // document.querySelector(".submit").style.visibility = "hidden";

    setTimeout(function () {
        const randomIndex = Math.floor(Math.random() * values.length);
        const randomValue = values[randomIndex];
        runs.textContent = randomValue;

        document.querySelector(".animbox").style.visibility = "hidden";
    // document.querySelector(".submit").style.visibility = "visible";

        result.style.visibility = "visible";

        result.style.color = "white";
        setTimeout(function () {
            result.style.color = "white";
        }, 200);

        if (randomValue == selectedValue) {
            let wicketsCount = parseInt(swickets.textContent);
            swickets.textContent = wicketsCount + 1;
            if (wicketsCount >= 1) {
                endGame();
            }
        } else {
            let runsCount = parseInt(sruns.textContent);
            sruns.textContent = runsCount + selectedValue;

            if(sruns.textContent >=10){
                statuscontent.textContent= "CHAMAN";
                statuscontent.style.color = "rgb(26 29 153)";
                statusbar.style.backgroundColor="yellow";
                statusbar.style.color="black";
            }
             if(sruns.textContent >=25){
                statuscontent.textContent= "AKSHIT";
                statuscontent.style.color = "rgb(19, 240, 237)";
                statusbar.style.backgroundColor="#08286a";
                statusbar.style.color="white";
            }
             if(sruns.textContent >=50){
                statuscontent.textContent= "BHAI";
                statuscontent.style.color = "silver";
                statusbar.style.backgroundColor="#a21025";
                statusbar.style.color="white";
            }
             if(sruns.textContent >=75){
                statuscontent.textContent= "MAHARAJ";
                statuscontent.style.color = "rgb(230 214 156)";
                statusbar.style.backgroundColor="#5214e2";
                statusbar.style.color="white";
            }
             if(sruns.textContent >=100){
                statuscontent.textContent= "PAPA";
                statuscontent.style.color = "#26f240";
                statusbar.style.backgroundColor="black";
                statusbar.style.color="white";
            }
            // if(sruns.textContent >=200){
            //     endGame();
            // }
        }

        if(selectedValue == randomValue){
            shownresult.textContent  = "OUT";
        }
        else{
            if(selectedValue == 1){
                shownresult.textContent  = "1 RUNS";
            }
            else if (selectedValue == 2){
                shownresult.textContent  = "2 RUNS";
            }
            
            else if (selectedValue == 3){
                shownresult.textContent  = "3 RUNS";
            }
            else if (selectedValue == 4){
                shownresult.textContent  = "4 RUNS";
            }
            else if (selectedValue == 6){
                shownresult.textContent  = "6 RUNS";
            }
            else{
                shownresult.textContent  = "DOT BALL";
            }
        }
    }, 1000);
}
const radioButtons = document.querySelectorAll('input[type="radio"]');
    

    radioButtons.forEach(button => {
        button.addEventListener('change', function() {
            selectedTeam = this.value;
        });
    });

function playgame() {
    document.querySelector(".game").style.display = "inline";
    document.querySelector(".openingscreen").style.display = "none";
    let samplename = document.getElementById("introname").value;
    if (samplename == "") {
        playername.textContent = "MR. BKL";
       
    }
    else {
        playername.textContent = samplename;
        
    }
    if(selectedTeam == null){
        teamname.textContent = "Chaman Chutiya Risers";
        document.getElementById("playername").style.backgroundColor="rgb(255 96 7)";
        
    }
    else if(selectedTeam == "Chapri Super Challengers"){
        teamname.textContent = "Chapri Super Challengers";
        document.getElementById("playername").style.backgroundColor="rgb(226 28 28)";
    }
    else if(selectedTeam == "BKL Kings"){
        teamname.textContent = "BKL Kings";
        document.getElementById("playername").style.backgroundColor="rgb(213 219 24)";
        document.getElementById("playername").style.color="#101010";
       
    }
    else if(selectedTeam == "Unemployed Riders"){
        teamname.textContent = "Unemployed Riders";
        document.getElementById("playername").style.backgroundColor="rgb(128 20 231)";
       
    }
    else {
        teamname.textContent = selectedTeam;
        
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
    shownresult.textContent = "START";

    sruns.textContent = 0;
    swickets.textContent = 0;
    sball.textContent = 0;
    sovers.textContent = 0;
    result.textContent = 0;


    statuscontent.style.color = "black";
    statusbar.style.backgroundColor="white";
    statusbar.style.color="black";
    document.getElementById("currentstatus").textContent= "BSDK";

    document.getElementById("tryval").textContent = tryvalue;

}





