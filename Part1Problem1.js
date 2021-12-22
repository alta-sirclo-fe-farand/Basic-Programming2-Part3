function jajanBoba (uang, callback) {
    if (uang >= 5000) {
        uang = uang - 5000;
        setTimeout(() => {
            console.log("kamu jajan boba dengan harga Rp 5000");
            console.log(`sisa uang kamu Rp ${uang}`);
        }, 5000);
        jajanSeblak (uang);
    } else {
        console.log("Maaf uang kamu belum cukup untuk membeli boba");
        console.log(`Sisa uang kamu Rp ${uang}`);
    }
}

function jajanSeblak (uang) {
    if (uang >= 8000) {
        uang = uang - 8000;
        setTimeout(() => {
            console.log("kamu jajan seblak dengan harga Rp 8000");
            console.log(`sisa uang kamu Rp ${uang}`);
        }, 9000);
    } else {
        console.log("Maaf uang kamu belum cukup untuk membeli seblak");
        console.log(`Sisa uang kamu Rp ${uang}`);
    }
}

jajanBoba(20000,jajanSeblak);