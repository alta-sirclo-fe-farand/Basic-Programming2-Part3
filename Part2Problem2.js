const listColors = ["green", "yellow", "blue", "orange", "red"];

function getRandomColor () {
    let color = new Promise((resolve, reject) => {
        let rnd = Math.floor(Math.random() * 10);
        console.log("loading starts...\n");
        console.log("generating random color...\n");
        if (rnd <= 4) {
            setTimeout(() => {
                resolve(rnd);
            }, 3000);
        } else {
            setTimeout(() => {
                reject(rnd);
            }, 3000);
        }
    })

    color.then((index) => {
        console.log(`The color we get is a ${listColors[index]}`);
        console.log("loading end...");
    }).catch(() => {
        console.log(`Failed to get random color, please try again`);
        console.log("loading end...");
    })
}

getRandomColor();