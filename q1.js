function accumulating (array){
    let arr = [];
    array.reduce((sum,value, i) =>  arr[i] = sum + value, 0);
    return arr;
}
console.log(accumulating([1,2,3,4]));
console.log(accumulating([1,5,7]));