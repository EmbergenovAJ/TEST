
function changes (text) {
    let a = text.split('');
    let b = []
    for (let v of a) {
        // console.log( v === v.toUpperCase());
        if ( v === '' || v === " ") {
            b.push(v);
            continue;
        } else if (Number(v) >= 0 && Number(v) <= 9) {
            v = "_";
            console.log(v);
            b.push(v);
            continue;
        } else if ( v === v.toUpperCase() ) {
            v = v.toLowerCase();
            console.log(v);
            b.push(v);
        } else if ( v === v.toLowerCase() ) {
            v = v.toUpperCase();
            console.log(v);
            b.push(v);
        }
    }
    return b.join('')
}

console.log(changes('Aa1 Bb1 Cc3 123'));