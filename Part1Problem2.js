const baju = {
    item: "shirt",
    price: 15000,
    time: 3000,
};

const celana = {
    item: "pants",
    price: 25000,
    time: 7000,
};

const topi = {
    item: "hat",
    price: 22000,
    time: 2000,
};

const sepatu = {
    item: "shoes",
    price: 46000,
    time: 10000,
};

function buyApparel(money, objItem, callback) {
    let to = [];
    const cumulativeSum = (sum => value => sum += value)(0);
    for (let item of objItem) {
        to.push(eval(item).time);
    }
    let TO = to.map(cumulativeSum);

    for (let item of objItem) {
        setTimeout(() => {
            console.log(`saya membawa uang sebesar Rp ${money}`);
            console.log(`saya ingin membeli ${item}\ndengan harga Rp ${eval(item).price}`);
            console.log(`dan waktu yang dibutuhkan adalah ${eval(item).time / 1000} detik\n`);
            money = money - eval(item).price;
        }, TO[objItem.indexOf(item)]);
    }     
    setTimeout(() => {
        console.log(`sisa kembaliannya adalah Rp ${money}`);
    }, TO[TO.length-1]);
}

buyApparel(150000,["baju","celana","topi","sepatu"]);