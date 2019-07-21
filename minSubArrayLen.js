// Write a function called minSubArrayLen,  which accepts two parameters - an array of 
// positive integers and a positive integer. This function should return the minimal length of a
// contiguous  subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Examples: 
// minSubArrayLen([2,3,1,2,4,3], 7);
// minSubArrayLen([2,1,6,5,4], 9);
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52);
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39);
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 55);
// minSubArrayLen([4,3,3,8,1,2,3], 11);
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95);

function minSubArrayLen(arr, num) {
    if (arr[0] >= num) {
        return 1;
    }
    let start = 0, end = 0, len = Infinity, sum = arr[0];
    while (end < arr.length) {
        if(sum >= num) {
            len = Math.min(len, (end-start)+1);
            sum -= arr[start];
            start++;
        } else {
            end++;
            sum += arr[end] || 0;
        }
    }
    return len === Infinity ? 0 : len;
}

console.log(minSubArrayLen([2,1,6,5,4], 9));
console.log(minSubArrayLen([2,3,1,2,4,3], 7));
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55));
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95));