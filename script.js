// task 1
let string = 'Hellow World! :-)69'
function info ( str ) {
    let template = /\p{L}/giu;
    let ltr = str.match(template).length;
    template = /\p{N}/gu;
    let num = str.match(template).length;
    template = /^(\p{L} | \p{N})/giu;
    let smb = str.length - ltr - num;
    console.log(ltr, num, smb);
}
info(string);
