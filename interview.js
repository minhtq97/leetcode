function reverseString(str) {
    let answer = [];
    for(let i = str.length -1; i >= 0 ; i--) {
        answer.push(str[i])
    }
    return answer.join('');
}

console.log(reverseString("hello")); // Output: "olleh"