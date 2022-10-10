
let url = 'https://itstep.org/ua/about';
function infoAboutURL ( str ) {
    return `протокол: ${str.match(/\w+(?=:\/\/)/)[0]}, домен: ${str.match(/(?<=\/\/)\w+.\w+(?=\/)/)[0]}, путь: ${str.match(/\/\w+\/.*/)[0]}`
}
console.log(infoAboutURL(url));