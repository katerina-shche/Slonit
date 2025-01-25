const calculate = function(num1, num2, operation) {
    return operation(num1, num2);
};

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operations = {
    add,
    subtract,
    multiply,
    divide
}; 


const selectedOperation = "multiply";
const selectedOperation1 = "add";
const selectedOperation2 = "subtract";
const selectedOperation3 = "divide";
console.log(calculate(6, 3, operations[selectedOperation])); // 18
console.log(calculate(6, 3, operations[selectedOperation1])); // 9
console.log(calculate(6, 3, operations[selectedOperation2])); // 3
console.log(calculate(6, 3, operations[selectedOperation3])); // 2

