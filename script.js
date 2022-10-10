
function separateBy ( str, separator) {
    let result = [];
    let a = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== separator) a+=str[i];
        if (str[i] === separator) {
            result.push(a);
            a = '';
        }
    }
    result.push(a);
    return result;
}
console.log(separateBy('10/08/2020', '/'));