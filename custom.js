Array.prototype.mycustom = function (callback, key) {
    const newArr = [];
    switch (key) {
        case 'push':
            this[this.length] = callback;
            return this;
            break;
        default:
            break;
    }
    for (let i = 0; i < this.length; i++) {
        switch (key) {
            case 'map':
                newArr.push(callback(this[i]));
                break;
            case 'filter':
                callback(this[i]) ? newArr.push(this[i]) : false;
                break;
            default:
                break;
        }
    }
    return newArr;
}

let a = [1, 2, 3];
a = a.mycustom(e => e * 2, 'map')
console.log(a)
a = a.mycustom(e => e % 2, 'filter')
console.log(a)
a = a.mycustom(5, 'push')
console.log(a)