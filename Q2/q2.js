function rating(array) {
    let sumOfArray = array.reduce((sum, value) => {
        return sum + value
    }, 0);


    let sumOfProduct = array.map((element, index) => {
        index = ++index;
        return element * index;
    });

    let result= sumOfProduct.reduce((acc, ele) => {
        return acc + ele
    }, 0);

    let division = result / sumOfArray;
    let roundedNum = Math.round(division);
    let roundedWith2Num = Array(division.toFixed(2));
    let x = JSON.stringify(roundedWith2Num)
    return x + "".padStart(roundedNum, "*");

}
console.log(rating([16, 17, 23, 40, 45]));