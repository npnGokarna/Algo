function flatten(arr, res = []){
    for(let item of arr) {
        if(!Array.isArray(item)) {
            res.push(item);
        }
        else {
            flatten(item, res);
        }
    }
    return res;
}

console.log(flatten([1,2,3,4,[5,6]]));
console.log(flatten([1,2,3,4,[5,6,[[[[55]]]]]]));