let a = [1, 75, 11, 2, 3, 4, 5, 76, 45, 6, 7, 8, 9, 10];

a = a.sort((a, b) => a - b)
// console.log(a)

let b = a.filter(ele => {
    let flag = false;
    if (ele === 1 || ele === 2) {
        return
    }
    for (let i = 3; i < ele; i++) {
        if (ele % i === 0) {
            flag = true;
        }
    }
    if (!flag) {
        return ele
    }
})
console.log(b)