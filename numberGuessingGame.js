function startNumberGuessingGame(min, max) {
    let currentMin = min;
    let currentMax = max;
    const theNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let theGuess = null;
    console.log(`Компьютер №1: "Я загадал число от ${min} до ${max}"`);
    console.log(`Компьютер №1: "Попробуй угадать его!"`);


    while (theGuess !== theNumber) {
        theGuess = calcNewGuess(currentMin, currentMax);
        console.log(`Компьютер №2: "Ты загадал число ${theGuess}?"`);

        if (theGuess > theNumber) {
            console.log('Компьютер №1: "Мое число меньше"');
            currentMax = theGuess;
        } else if (theGuess < theNumber) {
            console.log('Компьютер №1: "Мое число больше"');
            currentMin = theGuess;
        } else {
            console.log('Компьютер №1: "Угадал!"');
        }
    }

}

function calcNewGuess(currentMin, currentMax) {
    const newGuess = currentMin + Math.round((currentMax - currentMin) / 2);
    return newGuess;
}

startNumberGuessingGame(1, 100);
