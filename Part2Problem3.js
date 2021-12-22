const myNumber = 500;

function lottery (num) {
    let myLottery = new Promise((resolve, reject) => {
        let rnd = Math.floor(Math.random() * 1000);
        console.log("undian lotre dimulai...\n");
        console.log("sedang mengundi nomor anda...\n");
        if (num == rnd) {
            setTimeout(() => {
                resolve("");
            }, 10000);
        } else {
            setTimeout(() => {
                reject("");
            }, 10000);
        }
    })

    myLottery.then(() => {
        console.log("selamat anda mendapatkan hadiah utama berupa mobil\n");
        console.log("undian lotre telah berakhir...");
    }).catch(() => {
        console.log("maaf anda kurang beruntung\n");
        console.log("undian lotre telah berakhir...");
    })
}

lottery(myNumber);