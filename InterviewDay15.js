//Spread and Rest Operator

// 1. Spread Operator
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const finalArray = [...num1, ...num2];
console.log(finalArray);

// 2. Rest Operator
function add(...numbers){
    return numbers
}
console.log(add(num1,num2))