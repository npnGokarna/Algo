// check if two elements in a sorted array equals given average.

function averagePair(arr, num) {
    let start = 0, end = arr.length-1;
    while(start<end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) {
            return true;
        } else {
            avg < num ? start++ : end--;
        }
    }
    return false;
}
console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([], 4));