
function print ( str ) {
    let result = (arguments[0]).split('');
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
        if(result[i] === '%') {
            result[i+1] = arguments[Number(result[i+1])]
            result.splice(i,1);
            i--;
        }
    }
    return result.join('');
}

console.log(print('Today is %1 %2.%3.%4', 'Monday' , 10, 8, 2020));