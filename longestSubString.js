//find longest substring in given string

function longestSubString(str) {
    if (!str) {
        return 0;
    } if (str.length === 1) {
        return 1;
    }
    let strObj = {}, maxLen = 0, i=0, j=0, strLen = str.length;
    while(j < strLen) {
        if (strObj.hasOwnProperty(str[j])) {
            maxLen = Math.max(maxLen, j-i);
            i=(strObj[str[j]] < i) ? i : strObj[str[j]]+1;
            strObj[str[j]] = j;
        } else {
            strObj[str[j]] = j;
        }
        j++;
    }
    maxLen = Math.max(maxLen, j-i);
    return maxLen;
}

console.log(longestSubString('thisisawesome'));
console.log(longestSubString('bbbbbbbbbbbbb'));
console.log(longestSubString('rithmschool'));
console.log(longestSubString('abcdef'));
console.log(longestSubString('thecatinthehat'));
console.log(longestSubString(''));
console.log(longestSubString('longestsubstring'));
console.log(longestSubString('thisishowwedoit'));