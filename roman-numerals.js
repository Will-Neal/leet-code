ROMAN NUMERALS TO NUMBERS

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

var romanToInt = function(s) {
    total = 0
    indexCounter = -2
    for (const char of s) {
        indexCounter += 1
        if (char === 'M' && s[indexCounter] === 'C') {
            total += 800
        } else if (char === 'M') {
            total += 1000
        } else if (char === 'D' && s[indexCounter] === 'C') {
            total += 300
        } else if (char === 'D') {
            total += 500
        } else if (char === 'C' && s[indexCounter] === 'X') {
            total += 80
        } else if (char === 'C') {
            total += 100
        } else if (char === 'L' && s[indexCounter] === 'X') {
            total += 30
        } else if (char === 'L') {
            total += 50
        } else if (char === 'X' && s[indexCounter] === 'I') {
            total += 8
        } else if (char === 'X') {
            total += 10
        } else if (char === 'V' && s[indexCounter] === 'I') {
            total += 3
        } else if (char === 'V') {
            total += 5
        } else if (char === 'I') {
            total += 1
        }
    } return total
};

console.log(romanToInt('MCMXCIV'))