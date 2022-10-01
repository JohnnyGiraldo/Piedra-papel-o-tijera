const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";

const empate = 0;
const ganador = 1;
const perdedor = 2;

let isPlaying = false;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedraBtn.addEventListener("click", () => {
    play(piedra);
});
papelBtn.addEventListener("click", () => {
    play(papel);
});
tijeraBtn.addEventListener("click", () => {
    play(tijera);
});

function play(userOption) {
    if (isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".jpg";

    resultText.innerHTML = "Chossing!";

    const interval = setInterval(function() {
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".jpg";
    }, 200);

    setTimeout(function() {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".jpg";

        switch (result) {
            case empate:
                resultText.innerHTML = "Empate!";
                break;
            case ganador:
                resultText.innerHTML = "haz ganado!";
                break;
            case perdedor:
                resultText.innerHTML = "haz perdido!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return piedra;
        case 1:
            return papel;
        case 2:
            return tijera;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return empate;

    } else if (userOption === piedra) {

        if (machineOption === papel) return perdedor;
        if (machineOption === tijera) return ganador;

    } else if (userOption === papel) {

        if (machineOption === tijera) return perdedor;
        if (machineOption === piedra) return ganador;

    } else if (userOption === tijera) {

        if (machineOption === piedra) return perdedor;
        if (machineOption === papel) return ganador;

    }
}