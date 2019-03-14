module.exports = function getZerosCount(number, base) {
    let arrParametrs = {};
    let counterZeros = number;

    for (let i = 2; i <= base; i++) {
        if (base % i == 0) {
            base = base / i;

            if (arrParametrs[i]) arrParametrs[i]++
                else arrParametrs[i] = 1;
            i = 1;
        }
    }

    for (let key in arrParametrs) {
        let currentCounter = 0;
        let k;
        for (let j = 1;
            (k = Math.pow(key, j)) <= number; j++) {
            currentCounter += (number - (number % k)) / k;
        }
        currentCounter = (currentCounter - (currentCounter % arrParametrs[key])) / arrParametrs[key];
        if (currentCounter < counterZeros) counterZeros = currentCounter;
    }
    return counterZeros;
}