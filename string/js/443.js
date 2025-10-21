/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let ans = 0;
    for (let i = 0; i < chars.length; i++) {
        let count = 0;

        let ch = chars[i];
        while (i < chars.length && chars[i] === ch) {
            count++;
            i++;
        }
        chars[ans++] = ch;
        if (count > 1) {
            for (let c of count.toString()) {
                chars[ans++] = c;
            }
        }
        i--;
    }
    chars.length = ans;
    console.log(chars)
    return ans;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))