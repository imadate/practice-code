Array.prototype.myFilter = function (callback) {
    // create new array for storiung filtered data
    const newArr = [];
    // read each element of array
    for (let i = 0; i < this.length; i++) {

        if (callback(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

let a = [1, 75, 11, 2, 3, 4, 5, 76, 45, 6, 7, 8, 9, 10];
a = a.myFilter(ele => ele % 2 === 0);
console.log(a)
