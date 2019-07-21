function sameFrequency(num1, num2){
    if (!num1 || !num2) {
        return false;    
    }
    if (num1 === num2) {
        return true;
    }
    let counterObj = {};
    for (let item of num1.toString()) {
        counterObj[item] = ++counterObj[item] || 1;
    }
    for (let item of num2.toString()) {
        if (!counterObj[item]) {
            return false;
        }
        --counterObj[item];
    }
    return true;
}

console.log(sameFrequency(182,281));
console.log(sameFrequency(182,283));
console.log(sameFrequency(000,234));
console.log(sameFrequency(111111,111111));