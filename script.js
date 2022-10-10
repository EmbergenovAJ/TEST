
function calc (str) {
    let regexp = /[\-\+\*\/]/;
    let regexp1 = /(\d)+/g;
    let a = str.match(regexp1);
    let zn = str.match(regexp)[0];
    switch(zn){
        case '+': return Number(a[0]) + Number(a[1])
        case '-': return Number(a[0]) - Number(a[1])
        case '*': return Number(a[0]) * Number(a[1])
        case '/': return Number(a[0]) / Number(a[1])
    }
}

console.log(calc('222 / 2'));