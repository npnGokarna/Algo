//check if a string is a subsequence of another substring. 

function isSubsequence(sub, str) {
    if(sub === str) {
        return true;
    }
    let i = 0, j = 0;
    while (j<str.length) {
        if (i === sub.length) {
            return true;
        } else if (sub[i] === str[j]){
            i++;
        }
        j++;
    }
    return i === sub.length;
}
console.log(isSubsequence('hello', 'world hello'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc','abracadabra'));
console.log(isSubsequence('abc','acb'));