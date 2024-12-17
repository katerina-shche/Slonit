function calcSum(numbersArr) {
    let sum = 0;
    numbersArr.forEach(i => {
    sum += i;
    });
return sum;
}

let mostValuableCustomersIncomeArr = [10000, 20000, 30000];

let mostValuableCustomersIncomeSum = calcSum(mostValuableCustomersIncomeArr);

console.log(mostValuableCustomersIncomeSum);

//* На основе ваших знаний про правильные именования сделайте код. Сделайте код самодокументированным. Если этот код определяет, на какую сумму приобрели товаров 3 самых ценных покупателя.
