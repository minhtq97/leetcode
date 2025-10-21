var romanToInt = function (s) {
    const comparedSymbols = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000,

    }
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && comparedSymbols.hasOwnProperty(`${s[i]}${s[i + 1]}`)) {
            console.log( comparedSymbols[`${s[i]}${s[i + 1]}`])
            ans += comparedSymbols[`${s[i]}${s[i + 1]}`];
            i++;
        }
        else if (comparedSymbols.hasOwnProperty(s[i])) {
            ans += comparedSymbols[s[i]]
        }

        console.log(i, 's[i]', s[i], 'ans', ans, comparedSymbols[s[i]])

    }

    return ans;
};

// console.log(romanToInt('III'));
// console.log(romanToInt('IV'));
// console.log(romanToInt('IX'));
// console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));