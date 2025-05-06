module.exports = { romanNumbers };

function romanNumbers(num) {
    const thousandsRomansArr = ["", "M", "MM", "MMM"];
    const hundredsRomansArr = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tensRomansArr = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const onesRomansArr = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let result
    if (!isNaN(num) && num < 4000) {
        const thousands = Math.floor(num / 1000);
        const hundreds = Math.floor((num % 1000) / 100);
        const tens = Math.floor((num % 100) / 10);
        const ones = num % 10;

        result = `${thousandsRomansArr[thousands]}${hundredsRomansArr[hundreds]}${tensRomansArr[tens]}${onesRomansArr[ones]}`

    }else{
        result ='Не корректні данні! Максимально допустиме число "3999"';
    }
    return result;
}
