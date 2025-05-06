const { romanNumbers } = require('./math.js');

console.assert(romanNumbers(1) === 'I', 'Test 1 failed');
console.assert(romanNumbers(3999) === 'MMMCMXCIX', 'Test 3999 failed');
console.assert(romanNumbers(44) === 'XLIV', 'Test 44 failed');
console.assert(romanNumbers(2023) === 'MMXXIII', 'Test 2023 failed');

console.assert(romanNumbers(4000) === 'Не корректні данні! Максимально допустиме число "3999"', 'Test 4000 failed');
console.assert(romanNumbers("abc") === 'Не корректні данні! Максимально допустиме число "3999"', 'Test "abc" failed');

console.log("✅ All tests passed!");

