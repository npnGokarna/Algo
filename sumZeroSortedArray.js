// sum of any two  elements to zero in a sorted array in ascending order

function sumZero(arr) {
    let i = 0, j = arr.length-1;
    while(i<j) {
        let sum = arr[i] + arr[j];
        if (sum === 0) {
            return [arr[i], arr[j]];
        } else {
            sum<0 ? ++i : --j;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,5]));
console.log(sumZero([-2,-1,0,1,2,3,5,8,9,11]));
console.log(sumZero([]));
console.log(sumZero([1000, 2000]));