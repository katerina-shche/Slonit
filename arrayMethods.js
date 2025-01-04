const mySlice = (arr, start = 0, end = arr.length) => {
    if (start < 0) start = arr.length + start;
    if (end < 0) end = arr.length + end;
    if (end < start) return [];

    let newArr = [];
    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const myIndexOf = (arr, item, from = 0) => {
    if (from < 0) from = arr.length + from;
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) return i;
    }
    return -1;

};

const myIncluses = (arr, item, from = 0) => {
    if (from < 0) from = arr.length + from;
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) return true;
    }
    return false;
}


console.log([1,2,3,4,5,6,7,8,9,10].slice(-1));
console.log([1,2,3,4,5,6,7,8,9,10].slice(-1, -3));
console.log([1,2,3,4,5,6,7,8,9,10].slice(-5));
console.log([1,2,3,4,5,6,7,8,9,10].slice(-5, -3));
console.log([1,2,3,4,5,6,7,8,9,10].slice(3, 1));
console.log(mySlice([1,2,3,4,5,6,7,8,9,10], -1));
console.log(mySlice([1,2,3,4,5,6,7,8,9,10], -1, -3));
console.log(mySlice([1,2,3,4,5,6,7,8,9,10], -5));
console.log(mySlice([1,2,3,4,5,6,7,8,9,10], -5, -3));
console.log(mySlice([1,2,3,4,5,6,7,8,9,10], 3, 1));

console.log([1,2,3,4,5,6,7,8,9,10].indexOf(9, -5));
console.log([1,2,3,4,5,6,7,8,9,10].indexOf(1, -5));
console.log(myIndexOf([1,2,3,4,5,6,7,8,9,10], 9, -5));
console.log(myIndexOf([1,2,3,4,5,6,7,8,9,10],1, -5));

console.log([1,2,3,4,5,6,7,8,9,10].includes(9, -5));
console.log([1,2,3,4,5,6,7,8,9,10].includes(1, -5));
console.log(myIncluses([1,2,3,4,5,6,7,8,9,10], 9, -5));
console.log(myIncluses([1,2,3,4,5,6,7,8,9,10],1, -5));
