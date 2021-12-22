const shallPassed = 30;
let steps = 0;

function generateRandomSteps () {
    return Math.ceil(Math.random() * 10);
}

function generateRandomSeconds () {
    return Math.ceil(Math.random() * 10) * 1000;
}

function snakeAndLaddersGame (stepNow, seconds, callback) {
    let stepArr = [], secArr = [];
    const cumulativeSum = (sum => value => sum += value)(0);
    for (i = 0; i < 5; i++) {
        stepArr.push(generateRandomSteps());
        secArr.push(generateRandomSeconds());
    }
    let secCum = secArr.map(cumulativeSum);

    console.log("Let the game begin...\n");
    for (let singleStep of stepArr) {
        setTimeout(() => {
            console.log(`step ini membutuhkan ${secArr[stepArr.indexOf(singleStep)] / 1000} detik untuk menyelesaikannya\n`);
            console.log(`step ini mendapatkan ${singleStep} langkah`);
            console.log(`sehingga langkahnya bertambah dari ${stepNow} menjadi ${stepNow + singleStep}\n`);
            stepNow = stepNow + singleStep;
        }, secCum[stepArr.indexOf(singleStep)]);
    }

    if (stepNow >= shallPassed) {
        setTimeout(() => {
            console.log(`Congratulations, you have passed this game! And your total step is ${stepNow}`);
        }, secCum[secCum.length-1]);
    } else {
        setTimeout(() => {
            console.log(`Goodbye! you didn't pass this game because your step only ${stepNow}, because minimum step to pass this game is ${shallPassed}`);
        }, secCum[secCum.length-1]);
    }
}

snakeAndLaddersGame (steps, 0, generateRandomSeconds);