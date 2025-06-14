"use strict";
/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
    let transformedText = text;
    const specialCharacters = 
    [{ key: '&quot;', value: '"' }, { key: '&apos;', value: "'" }, { key: '&amp;', value: "&" }, { key: '&gt;', value: ">" }, { key: '&lt;', value: "<" }, { key: '&frasl', value: "/" }];
    for(let item of specialCharacters) {
        let regex = new RegExp(String.raw`${item.key}`,"gi");
        console.log(regex)
        transformedText = transformedText.replaceAll(regex,item.value)
    }

    return transformedText;
};

console.log(entityParser("&amp; is an HTML entity but &ambassador; is not."))
console.log([...[],...[2,3]].sort((a,b)=>a-b))