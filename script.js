
function toCamelCase ( str ) {
    let a = str.split('');
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '-') {
            a[i+1] = a[i+1].toUpperCase();
            a.splice(i,1);
            i--;
            continue;
        }
        b.push(a[i]);
    }
    return b.join('');
}

console.log(toCamelCase('font-size'));