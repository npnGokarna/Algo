// find max sum of 'n' consecutive numbers in an array

function maxSubArraySum(arr, n) {
    if (!arr.length || n>arr.length) {
        return null;
    }
    let maxSum = 0, sum = 0;
    for (let i=0; i<n; i++) {
        sum += arr[i];
    }
    if (arr.length === n) {
        return sum;
    }
    for (let i=n; i<arr.length; i++) {
        sum = sum - arr[i-n] + arr[i];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

console.log(maxSubArraySum([1,2,5,2,8,1,5],2));
console.log(maxSubArraySum([1,2,5,2,8,1,5],4));
console.log(maxSubArraySum([4,2,1,6],1));
console.log(maxSubArraySum([],4));
console.log(maxSubArraySum([],0));
console.log(maxSubArraySum([1,2],2));