function ObjCalculator() {
    this.add = function(obj) {
        let sum = 0;
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                sum += obj[key];
            }
        }
        return sum;
    }
    this.sortedNumberProperties = function(obj) {
        let arr = [];
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                arr.push([key, obj[key]]);
            }
        }
        return arr.sort((a, b) => b[1] - a[1]).map(item => item[0]);
    }
}

let objCalculator = new ObjCalculator();

let obj = {name: 'Vasya', friends: 5, likes: 19, projects: 7} 

console.log(objCalculator.add(obj));
console.log(objCalculator.sortedNumberProperties(obj));
