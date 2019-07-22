function isPalindrome(str) {
    if (str.length < 2) {
        return true;
    }
    return (str[0] === str[str.length-1] && isPalindrome(str.substring(1, str.length-1)));
}


function isPalindromeNonRecursion(str) {
    if (str.length < 2) {
        return true;
    }
    let i = 0, j = str.length-1;
    while(i<j) {
        if (str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(isPalindrome('aabaa'), isPalindromeNonRecursion('aabaa'));
console.log(isPalindrome('aaba'), isPalindromeNonRecursion('aaba'));