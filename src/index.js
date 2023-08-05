module.exports = function reverse (n) {
    let k = Math.abs(n).toString();
    let i = 0;
    let result = '';
    while (i < k.toString().length) {
        result = k[i] + result;
        i += 1;
    }
    return result;
}
