const { romanNumbers } = require('./math.js');

console.log(romanNumbers(1) === 'I', 'Test 1 failed');
console.log(romanNumbers(3999) === 'MMMCMXCIX', 'Test 3999 failed');
console.log(romanNumbers(44) === 'XLIV', 'Test 44 failed');
console.log(romanNumbers(2023) === 'MMXXIII', 'Test 2023 failed');

console.log(romanNumbers(4000) === 'Не корректні данні! Максимально допустиме число "3999"', 'Test 4000 failed');
console.log(romanNumbers("abc") === 'Не корректні данні!', 'Test "abc" failed');

console.log("✅ All tests passed!");
