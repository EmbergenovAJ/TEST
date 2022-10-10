
function digitsToText ( num ) {
    if (num < 0 || num >= 100) return 'What is it?';
    let ed = ['ноль','один','два','три','четыре','пять','шесть','семь','восемь','девять',];
    let bb = ['десять','одинадцвть','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семьнадцать','восемнадцать','девятнадцать',];
    let des = ['00','00','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто',];
    let result = '';

    if (num >= 0 && num < 10) result += ed[num];
    if (num >= 10 && num < 20) result += bb[num - 10];
    if (num === 20 || num === 30 || num === 40 || num === 50 || num === 60 || num === 70 || num === 80 || num === 90) return des[num/10];
    if (num > 20 && num <= 99) result += des[Math.floor(num/10)] + ' ' + ed[num%10];
    return result;
}
console.log( digitsToText(69) );