//count unique values in a sorted array

function countUniqueValues(arr) {
    if (arr.length===0) {
        return 0;
    }
    let i = 0, j = 1;
    while(j<arr.length) {
        if(arr[i] === arr[j]) {
            ++j;
        } else {
            ++i;
            arr[i] = arr[j];
            ++j;
        }
    }
    return i+1;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));