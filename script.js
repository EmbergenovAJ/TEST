
function strSummator (str, ...rest) {
    let result = str;
    for (let v of rest) {
        result += v;
    }
    return result
}

console.log(strSummator('a','b','c','d','e','f','g','h','i','j',));