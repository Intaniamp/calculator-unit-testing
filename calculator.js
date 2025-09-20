function tambah (a,b) {
    return a + b;
}

function kurang (a,b) {
    return a - b;
}

function kali (a,b) {
    return a*b;
}

function bagi (a,b) {
    if (b === 0) throw new Error("Tidak bisa bagi nol");
    return a/b;
}

export {tambah, kurang, kali, bagi};