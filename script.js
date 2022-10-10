function abrv( txt ) {
    txt = txt.split('');
    let result = txt[0].toUpperCase();
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === ' ' || txt[i] === '-'){
            result += txt[i+1].toUpperCase();
        }
    }
    return result;
}
console.log(abrv('cascading style sheets'));
console.log(abrv('Объектно-ориентированное программирование'));