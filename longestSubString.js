//find longest substring in given string

function longestSubString(str) {
    if (!str) {
        return 0;
    } if (str.length === 1) {
        return 1;
    }
    let strObj = {}, maxLen = 0, i=0, j=0;
    while(j < str.length) {
        if (strObj.hasOwnProperty(str[j])) {
            // if current index of repeating character is greater than the index it appears in
            // the string, do not change current index, else shift current index to one character after
            // the repeating character.
            i = Math.max(i, strObj[str[j]]+1);
        }
        maxLen = Math.max(maxLen, j-i+1);
        strObj[str[j]] = j;
        j++;
    }
    maxLen = Math.max(maxLen, j-i);
    return maxLen;
}

console.log(longestSubString('thisisawesome')); // 6
console.log(longestSubString('bbbbbbbbbbbbb')); // 1
console.log(longestSubString('rithmschool')); // 7
console.log(longestSubString('abcdef')); // 6
console.log(longestSubString('thecatinthehat')); // 7
console.log(longestSubString('')); // 0
console.log(longestSubString('longestsubstring')); // 8
console.log(longestSubString('thisishowwedoit')); // 6