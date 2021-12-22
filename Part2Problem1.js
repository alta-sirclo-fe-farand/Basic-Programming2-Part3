const shallPassed = 30;
let steps = 0;

function generateRandomSteps () {
    return Math.ceil(Math.random() * 10);
}

function generateRandomSeconds () {
    return Math.ceil(Math.random() * 10) * 1000;
}

function snakeAndLaddersGame (stepNow, seconds, callback) {
    console.log("Let the game begin...\n");
    for (i = 0; i < 5; i++) {
        let step = new Promise((resolve) => {
            let stp = generateRandomSteps(), sec = generateRandomSeconds();
            setTimeout(() => {
                console.log(`step ini membutuhkan ${sec / 1000} detik untuk menyelesaikannya\n`);
                resolve(stp);
            }, sec)
        })
        step.then((stp) => {
            console.log(`step ini mendapatkan ${stp} langkah`);
            console.log(`sehingga langkahnya bertambah dari ${stepNow} menjadi ${stepNow + stp}\n`);
            stepNow = stepNow + stp;
        })
    }
}

snakeAndLaddersGame (steps, 0, generateRandomSeconds);