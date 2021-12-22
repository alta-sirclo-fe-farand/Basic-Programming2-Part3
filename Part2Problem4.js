const listBrands = [
    {
        brand: 'H&M',
        processTime: 7000
    },
    {
        brand: 'Zara',
        processTime: 4000
    },
    {
        brand: 'Uniqlo',
        processTime: 5000
    },
    {
        brand: 'Pedro',
        processTime: 9000
    },
    {
        brand: 'The Executive',
        processTime: 10000
    },
    {
        brand: 'Adidas',
        processTime: 8000
    },
    {
        brand: 'Nike',
        processTime: 7000
    },
    {
        brand: 'Puma',
        processTime: 6000
    },
    {
        brand: 'Converse',
        processTime: 6000
    },
    {
        brand: 'Mark & Spencer',
        processTime: 9000
    },
]

function randomizeBrand (typeApparel) {
    let index = Math.floor(Math.random() * listBrands.length);
    let outfitBrand = new Promise((resolve) => {
        setTimeout(() => {
            resolve(index);
        }, listBrands[index].processTime)
    });
    return outfitBrand;
}

let promises = [];

promises.push(randomizeBrand("clothes"));
promises.push(randomizeBrand("pants"));
promises.push(randomizeBrand("shoes"));
promises.push(randomizeBrand("hat"));

const clothes = new Promise((resolve) => {
    resolve(promises[0]);
})
const pants = new Promise((resolve) => {
    resolve(promises[1]);
})
const shoes = new Promise((resolve) => {
    resolve(promises[2]);
})
const hat = new Promise((resolve) => {
    resolve(promises[3]);
})

Promise.all([
    clothes, pants, shoes, hat
]).then((promises) => {
    console.log(`I wear clothes from ${listBrands[promises[0]].brand} & I wear pants from ${listBrands[promises[1]].brand} & I wear shoes from ${listBrands[promises[2]].brand} & I wear hat from ${listBrands[promises[3]].brand}`)
});
