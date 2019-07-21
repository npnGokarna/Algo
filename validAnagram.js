function validAnagram(str1, str2){
    if (str1 === str2) {
        return true;
    } else if (str1.length !== str2.length) {
        return false;
    } else {
        let freqCounter = {};
        for (let char of str1) {
            freqCounter[char] = ++freqCounter[char] || 1;
        }
        for (let char of str2) {
            if (!freqCounter[char]) {
                return false;
            } else {
                --freqCounter[char];
            }
        }
        return true;
    }
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qrewty'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));